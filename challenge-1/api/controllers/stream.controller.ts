import https from "https";
import fs from "fs";
import path from "path";
function request_file_stream_and_save(url: string, filename: string) {
  const file = fs.createWriteStream(path.join("out", filename));
  return new Promise(function (resolve, reject) {
    https.get(url, function (response) {
      response.pipe(file);
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
