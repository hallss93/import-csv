import { Router } from "express";
import StreamRouter from "./stream.router";
class Routes {
  static define(router: Router): Router {
    router.use("/api/stream", StreamRouter);
    return router;
  }
}
export default Routes.define(Router());
