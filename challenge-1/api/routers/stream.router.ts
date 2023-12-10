import { Router } from "express";
import { request_file_stream_and_save } from "./../controllers/stream.controller";
import { find } from "./../models/customer.model";
const router = Router();
router.get("/", async (_request, response): Promise<void> => {
  const URL = "https://coletasweb-files.s3.amazonaws.com/dump+(1).tar.gz";
  const filename = "dump.tar.gz";
  const dados = await find();
  await request_file_stream_and_save(URL, filename);
  response.json({
    dados,
    message: "Ok",
  });
});
export default router;
