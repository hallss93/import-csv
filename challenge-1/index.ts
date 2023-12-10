import { SetupApplication } from "./api/server";
const port = Number(process.env.PORT || 3000);
class Server {
  static start() {
    const application = new SetupApplication(port);
    application.init();
    application.start();
  }
}
Server.start();
