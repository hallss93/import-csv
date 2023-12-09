import https from "https";
import { createWriteStream } from "fs";
import path from "path";
import zlib from "zlib";
import tar from "tar";
import { create_dir } from "./../util/files";

async function request_file_stream_and_save(url: string, filename: string) {
  const file_path = path.join("out", filename);

  const output = path.join("out", `extract-${new Date().getTime()}`);

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
export { request_file_stream_and_save };
