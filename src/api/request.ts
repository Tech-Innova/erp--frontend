export async function postRequest(url: string, data: any, token?: string) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    // const dat = await response.json();
    return response;
  } catch (e) {
    /* handle error */
    console.error("Utility::postRequest ", e);
    throw e;
  }
}

export async function getRequest(url: string, token?: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // const data = await response.json();
    return response;
  } catch (e) {
    /* handle error */
    console.error("Utility::getRequest ", e);
    throw e;
  }
}

export async function getJson(res: Response) {
  const data = await res.json();
  return data;
}
