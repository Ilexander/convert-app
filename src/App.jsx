import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyInput } from "./components/Currency/CurrencyInput";
import { Header } from "./components/Header/Header";
import { changeSecond, changeFirst } from "./reducer/currencySlice";
import { fetchValet } from "./reducer/valueSlice";
import { format } from "./scripts/scripts";
import "./style.css";

function App() {
  const [firstInput, setfirstInput] = useState(0);
  const { valet, currency } = useSelector((state) => state);
  const [secondInput, setSecondInput] = useState(0);
  const rates = valet.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchValet());
  }, [dispatch]);

  function handleFirstChange(firstInput) {
    setSecondInput(
      format(
        (firstInput * rates[0][currency.second]) / rates[0][currency.first]
      )
    );
    setfirstInput(firstInput);
  }

  function handleCurrency1Change(firstCurrency) {
    setSecondInput(
      format((firstInput * rates[0][currency.second]) / rates[0][firstCurrency])
    );
    dispatch(changeFirst(firstCurrency));
  }

  function handleSecondChange(value) {
    setfirstInput(
      format((value * rates[0][currency.first]) / rates[0][currency.second])
    );
    setSecondInput(value);
  }

  function handleCurrency2Change(currency2) {
    setfirstInput(
      format((secondInput * rates[0][currency.first]) / rates[0][currency2])
    );
    dispatch(changeSecond(currency2));
  }

  return (
    <React.Fragment>
      <Header />
      <div>
        <CurrencyInput
          title={currency.first}
          onAmountChange={handleFirstChange}
          onCurrencyChange={handleCurrency1Change}
          array={Object.keys(rates[0])}
          amount={firstInput}
          currency={currency.first}
        />
        <CurrencyInput
          title={currency.second}
          onAmountChange={handleSecondChange}
          onCurrencyChange={handleCurrency2Change}
          array={Object.keys(rates[0])}
          amount={secondInput}
          currency={currency.second}
        />
      </div>
    </React.Fragment>
  );
}

export { App };
