import { existsSync, mkdirSync } from "fs";

async function create_dir(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
}
export { create_dir };
