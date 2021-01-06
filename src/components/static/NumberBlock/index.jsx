import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
// import { useState } from "react";

const mapDispatchToProps = (dispatch) => {
  return {
    changeNumber: (newNumber) => {
      return dispatch({
        type: "CHANGE_NUMBER",
        updated: newNumber,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    inputObj: state.inputData,
  };
};

function NumberBlock(props) {
  const { changeNumber, inputObj } = props;

  const numberHandler = ({ target }) => {
    changeNumber(target.value);
  };

  return (
    <div className={styles.number__container}>
      <input
        className={styles.number__input}
        type="text"
        name="number"
        autoComplete="off"
        placeholder="Номер посилки"
        onChange={numberHandler}
        value={inputObj.number}
      />
      <span id="user-number__notification" className={styles.notifications}>
        Номер посилки
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberBlock);

/*
function NumberBlock(props) {
  // const {numberState, setNumberState} = props;
  const [state, setState] = useState("");

  const inputHandler = ({ target }) => {
    setState(target.value);
  };

  return (
    <div className={styles.number__container}>
      <input
        className={styles.number__input}
        type="text"
        name="number"
        autoComplete="off"
        placeholder="Номер посилки"
        onChange={inputHandler}
        value={state}
      />
      <span id="user-number__notification" className={styles.notifications}>
        Номер посилки
      </span>
    </div>
  );
}

export default NumberBlock;
*/
