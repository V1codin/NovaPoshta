import { combineReducers } from "redux";

import warning from "../../components/modules/Warning/components/setts/reducer";
import inputData from "../../components/blocks/InputContainer/reducer";
import history from "../../components/blocks/HistoryCointainer/redux/reducer";

import costState from "../../components/static/CostBlock/redux/reducer";

import cities from "../CitiesReducer/reducer";

export default combineReducers({
  warning,
  inputData,
  history,
  costState,
  cities,
});
