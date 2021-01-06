import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { useState, useEffect, useMemo } from "react";

const mapStateToProps = (state) => {
  return {
    serverCities: state.cities.costCities,
    costState: state.costState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    extractData: (value, senderName) => {
      dispatch({
        type: "EXTRACT_SENDER",
        updated: value,
        sendName: senderName,
      });
    },
    setSender: (value) => {
      dispatch({
        type: "CAHNGE__SENDER__SELECT",
        newState: value,
      });
    },
  };
};

function SenderSelect(props) {
  const { extractData, serverCities, costState, setSender } = props;

  const [cities, setCities] = useState([]);

  const res = useMemo(() => {
    const res = serverCities.map((item) => {
      return (
        <option value={item.Ref} name={item.Ref} key={item.Ref}>
          {item.Description}
        </option>
      );
    });
    return res;
  }, [serverCities]);

  useEffect(() => {
    setCities(res);
  }, [res]);

  const selectHandler = ({ target }) => {
    extractData(target.value, target.selectedOptions[0].text);
    setSender(target.value);
  };

  const selectClasses = styles.inputs + " " + styles.option__select_textCl;

  return (
    <>
      <div className={styles.sender}>
        <select
          className={selectClasses}
          onChange={selectHandler}
          value={costState.selectSend}
          id="CitySender"
        >
          <option disabled defaultValue>
            {costState.defaultSend}
          </option>
          {cities}
        </select>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SenderSelect);
