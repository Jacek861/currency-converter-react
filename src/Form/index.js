import { StyledForm, 
  StyledLabel, 
  StyledLabelText, 
  StyledInput, 
  StyledParagrath, 
  StyledSelect } from "./styled.js"
import { Header } from "./Header";
import { Buttons } from "./Buttons";
import { Result } from "./Result";
import { currencies } from "./currencies";
import { useState } from "react";
import { Clock } from "./Clock"

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

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  const onResetClick = () => {
    setAmount("");
    setCurrency(currencies[0].shortName);
    setResult();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Clock />
      <Header title="Currency converter" />
      <StyledParagrath>
        *Required Form Field
      </StyledParagrath>
      <p>
        <StyledLabel>
          <StyledLabelText>
            Amount PLN*:
          </StyledLabelText>
          <StyledInput
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            type="number"
            placeholder="Enter amount"
            step="0.1"
            required />
        </StyledLabel>
      </p>
      <p>
        <StyledLabel>
          <StyledLabelText>
            Currency*:
          </StyledLabelText>
          <StyledSelect
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency => (
              <option
                key={currency.shortName}
                value={currency.shortName}
              >
                {currency.longName}
              </option>
            )))}
          </StyledSelect>
        </StyledLabel>
      </p>
      <Buttons
        onResetClick={onResetClick}
      />
      <Result result={result} />
      <StyledParagrath>
        Currency Rates according to NBP Table number 014/A/NBP/2023, date: 20/01/2023
      </StyledParagrath>
    </StyledForm>
  )
};