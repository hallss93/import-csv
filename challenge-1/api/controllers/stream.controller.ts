import https from "https";
import { createWriteStream, createReadStream } from "fs";
import path from "path";
import zlib from "zlib";
import tar from "tar";
import csv from "csv-parser";

import { create_dir } from "./../util/files";
import { CustomerMap } from "../util/customer.map";
import { OrganizationMap } from "../util/organization.map";
import dbConfig from "./../database/dbConfig";
import { Customer } from "./../interfaces/customer.interface";
import { Organization } from "../interfaces/organization.interface";

async function request_file_stream_and_save(
  url: string,
  filename: string,
  out = "dump"
) {
  const file_path = path.join("out", filename);

  const output = path.join("out", out);

  /* Create Out directory */
  await create_dir("out");

  /* Create Output directory if not exists */
  await create_dir(output);

  const file = createWriteStream(file_path);
  const writeTar = tar.extract({ strip: 1, path: file_path, cwd: output });

  return new Promise(function (resolve, reject) {
    writeTar.on("finish", () => resolve(file_path));
    https.get(url, function (response) {
      response.pipe(file);
      response.pipe(zlib.createGunzip()).pipe(writeTar);

      file.on("finish", () => {
        file.close();
        console.log(`Download ${filename} Completed`);
        resolve(true);
      });
      file.on("error", reject);
    });
  });
}

function import_customer_csv_file(filename: string, tableName: string) {
  return new Promise(function (resolve, reject) {
    let csvrows: Customer[] = [];

    const stream = createReadStream(filename);
    stream
      .on("error", reject)
      .pipe(csv())

      .on("data", (data) => csvrows.push(new CustomerMap(data).get_values()))
      .on("end", () => {
        dbConfig
          .transaction(function (tr) {
            return dbConfig
              .batchInsert(tableName, csvrows, 100)
              .transacting(tr);
          })
          .then(resolve)
          .catch(reject);
      })
      .on("error", reject);
  });
}

function import_organization_csv_file(filename: string, tableName: string) {
  return new Promise(function (resolve, reject) {
    let csvrows: Organization[] = [];

    const stream = createReadStream(filename);
    stream
      .on("error", reject)
      .pipe(csv())

      .on("data", (data) =>
        csvrows.push(new OrganizationMap(data).get_values())
      )
      .on("end", () => {
        dbConfig
          .transaction(function (tr) {
            return dbConfig
              .batchInsert(tableName, csvrows, 100)
              .transacting(tr);
          })
          .then(resolve)
          .catch(reject);
      })
      .on("error", reject);
  });
}

export {
  request_file_stream_and_save,
  import_customer_csv_file,
  import_organization_csv_file,
};
