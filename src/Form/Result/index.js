import { StyledResult } from "./styled.js"

export const Result = ({ result }) => (
  <StyledResult>
    {result !== undefined && (
      <>
        {result.basicAmount.toFixed(2)}&nbsp;PLN&nbsp;= {" "}

        <strong>
          {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </StyledResult>
);