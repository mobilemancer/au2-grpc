import { DroidServiceClient } from "./proto/gen/DroidsServiceClientPb";
import { DroidsRequest } from "./proto/gen/droids_pb.js";

export class MyApp {
  public message = "Click button to call gRPC service!";
  public droidsList = [];

  public droids = [];

  public btnClicked(): void {
    const client = new DroidServiceClient("https://localhost:5001");
    const request = new DroidsRequest();

    client.getAll(request, {}, (err, response) => {
      if (err !== null) {
        this.message = `Status: ${err.message}`;
      }
      if (response !== null) {
        this.message = "Status: 👍";
        this.droidsList = response.getDroidsList();
        this.droids = response.toObject().droidsList;
      }
    });
  }
}
