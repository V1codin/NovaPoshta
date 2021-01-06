import React from "react";
import styles from "./styles.module.css";
import { connect } from "react-redux";
import { useEffect, useState, useMemo } from "react";

const mapStateToProps = (state) => {
  return {
    serverCities: state.cities.costCities,
    costState: state.costState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    extractData: (value, recipientName) => {
      dispatch({
        type: "EXTRACT_RECIPIENT",
        updated: value,
        recName: recipientName,
      });
    },
    setRec: (value) => {
      dispatch({
        type: "CAHNGE__RECIPIENT__SELECT",
        newState: value,
      });
    },
  };
};

function RecipientSelect(props) {
  const { extractData, serverCities, costState, setRec } = props;

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

    setRec(target.value);
  };

  const selectClasses = styles.inputs + " " + styles.option__select_textCl;

  return (
    <>
      <div className={styles.recipient}>
        <select
          className={selectClasses}
          onChange={selectHandler}
          value={costState.selectRecipient}
          id="CityRecipient"
        >
          <option disabled defaultValue>
            {costState.defaultRecipient}
          </option>
          {cities}
        </select>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipientSelect);
