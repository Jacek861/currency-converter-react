import "./style.css";
import { Header } from "./Header";
import { Buttons } from "./Buttons";
import { Result } from "./Result";
import { currencies } from "./currencies";
import { useState } from "react";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ shortName }) => shortName === currency).rate;

    setResult({
      basicAmount: +amount,
      finalAmount: amount / rate,
      currency,
    });
  };

  const onFieldsetSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onResetClick = () => {
    setAmount("");
    setCurrency(currencies[0].shortName);
    setResult("");
  };

  return (
    <fieldset className="form__fieldset" onSubmit={onFieldsetSubmit} >
      <Header title="Currency converter" />
      <p>
        <label>
          <span className="form__labelText">
            Amount PLN*:
          </span>
          <input
            value={amount}
            onChange={({target}) => setAmount(target.value)}
            className="form__field"
            type="number"
            placeholder="Enter amount"
            step="0.1"
            required />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">
            Currency:
          </span>
          <select
            className="form__field"
            value={currency}
            onChange={({target}) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.shortName}
                value={currency.shortName}
              >
                {currency.longName}
              </option>
            )))}
          </select>
        </label>
      </p>

      <p className="form__paragrath">
        Currency Rates according to NBP Table number 014/A/NBP/2023, date: 20/01/2023
      </p>
      <p className="form__paragrath">
        *Required Form Field
      </p>
      <Buttons
        onResetClick={onResetClick}
      />
      <Result result={result} />
    </fieldset>
  )
};