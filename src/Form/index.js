import "./style.css";
import { Header } from "./Header";
import { Buttons } from "./Buttons";
import { Result } from "./Result";

export const Form = () => (
  <fieldset className="form__fieldset" >
    <Header title="Currency converter" />
    <p>
      <label>
        <span className="form__labelText">
          Amount PLN*:
        </span>
        <input
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
        <select class="form__field" name="currency">
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
        </select>
      </label>
    </p>

    <p className="form__paragrath">
      Currency Rates according to NBP Table number 014/A/NBP/2023, date: 20/01/2023
    </p>
    <p className="form__paragrath">
      *Required Form Field
    </p>
    <Buttons />
    <Result />
  </fieldset>
)