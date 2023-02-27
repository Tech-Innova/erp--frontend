export async function postRequest(url: string, data: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

export async function getRequest(url: string) {
  try {
    const response = await fetch(url, {
      method: "GET",
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
