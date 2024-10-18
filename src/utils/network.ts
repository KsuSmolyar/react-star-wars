export const getApiResource = async (url: string) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch: ", res.status);
      return false;
    }
    return await res.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Could not fetch", error.message);
      return false;
    }
  }
}


export const makeConcurrentRequest = async(urlArr:string[]) => {
  const res = await Promise.all(urlArr.map((url) => {
    return fetch(url).then((response) => response.json())
  }));

  return res;
}
