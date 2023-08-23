class Server {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private fetchJson<RETURN_TYPE, BODY_TYPE>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    body?: BODY_TYPE
  ): Promise<RETURN_TYPE> {
    const response = fetch(this.apiUrl + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(response => response.json());

    // [TODO] Retornar status code e data
    return response;
  }

  get<RETURN_TYPE>(endpoint: string): Promise<RETURN_TYPE> {
    return this.fetchJson<RETURN_TYPE, any>(endpoint, "GET");
  }

  post<RETURN_TYPE, BODY_TYPE>(endpoint: string, data: any): Promise<any> {
    return this.fetchJson<RETURN_TYPE, BODY_TYPE>(endpoint, "POST", data);
  }

  patch<RETURN_TYPE, BODY_TYPE>(endpoint: string, data: any): Promise<any> {
    return this.fetchJson(endpoint, "PATCH", data);
  }

  delete<RETURN_TYPE>(endpoint: string): Promise<any> {
    return this.fetchJson<RETURN_TYPE, any>(endpoint, "DELETE");
  }
}

export default Server;
