export default function (requestObject, reduxStore) {
  try {
    (async function () {
      const res = await requestObject.getCities();
      if (res !== undefined && res.success === true) {
        reduxStore.dispatch({
          type: "GET_CITIES",
          serverScities: res.data,
        });
      } else {
        throw new Error("Fetching data failed");
      }
    })();

    /*
    fetchData().then(({ data }) => {
      reduxStore.dispatch({
        type: "GET_CITIES",
        serverScities: data,
      });
    });
    */
  } catch (e) {
    console.log(e);
  }
}
