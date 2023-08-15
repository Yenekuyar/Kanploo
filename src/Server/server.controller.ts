import { IServer } from "./server.props";

export default class Server {
  private apiurl: string;
  private endpoint: string;
  private body?: string;

  constructor(apiurl: string, endpoint: string, body?: string) {
    this.apiurl = apiurl;
    this.endpoint = endpoint;
    this.body = body
  }

  get() {
    fetch(this.apiurl + this.endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  post() {
    fetch(this.apiurl + this.endpoint, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: this.body
    });
  }
}
