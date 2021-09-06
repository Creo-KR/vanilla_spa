const endpointUrl = "http://localhost:5000/api/";

export const request = async (api) => {
  try {
    let response = await fetch(endpointUrl + api);

    if (!response.ok) {
      throw new Error("API ERROR");
    }

    let json = await response.json();
    return json;
  } catch (e) {
    throw new Error(`API ERROR : ${e.message}`);
  }
};
