import { Router } from "express";
import {
  import_customer_csv_file,
  import_organization_csv_file,
  request_file_stream_and_save,
} from "./../controllers/stream.controller";
import { countCustomers } from "./../models/customer.model";
import { countOrganizations } from "./../models/organization.model";
import path from "path";

const router = Router();
router.get("/", async (_request, response): Promise<void> => {
  const URL = "https://coletasweb-files.s3.amazonaws.com/dump+(1).tar.gz";
  const filename = "dump.tar.gz";

  /* Request file, download and unzip */
  await request_file_stream_and_save(URL, filename);

  /* Read customers.csv file and import  */
  await import_customer_csv_file(
    path.join("out", "dump", "customers.csv"),
    "customers"
  );

  /* Read organizations.csv file and import */
  await import_organization_csv_file(
    path.join("out", "dump", "organizations.csv"),
    "organizations"
  );
  const organizations = await countOrganizations();
  const customers = await countCustomers();

  response.json({
    customers: customers[0].CNT,
    organizations: organizations[0].ONT,
    message: "Ok",
  });
});
export default router;
