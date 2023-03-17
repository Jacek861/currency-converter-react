import "./style.css";

export const Result = ({ result }) => (
  <p className="form__result">
    {result !== undefined && (
      <>
        {result.basicAmount}&nbsp;PLN&nbsp;={" "}
        <strong>
          {result.finalAmount}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);