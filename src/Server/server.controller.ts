class Server {
  public apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private async fetchJson(
    endpoint: string,
    method: string,
     body?: any
  ): Promise<any> {
    const response = await fetch(this.apiUrl + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }

  async get(endpoint: string): Promise<any> {
    return this.fetchJson(endpoint, "GET");
  }

  async post(endpoint: string, data: any): Promise<any> {
    return this.fetchJson(endpoint, "POST", data);
  }

  async patch(endpoint: string, data: any): Promise<any> {
    return this.fetchJson(endpoint, "PATCH", data);
  }

  async delete(endpoint: string): Promise<any> {
    return this.fetchJson(endpoint, "DELETE");
  }
}

export default Server;
