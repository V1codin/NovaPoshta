const defState = {
  defaultSend: "Місто відправлення",
  selectSend: "Місто відправлення",
  refSend: "",

  defaultRecipient: "Місто отримування",
  selectRecipient: "Місто отримування",
  refRec: "",
};

export default function (state = defState, { type, newState }) {
  if (type === "CAHNGE__SENDER__SELECT") {
    return {
      ...state,
      selectSend: newState,
    };
  }
  if (type === "CAHNGE__RECIPIENT__SELECT") {
    return {
      ...state,
      selectRecipient: newState,
    };
  }
  if (type === "CLEAR") {
    return defState;
  }
  return state;
}
