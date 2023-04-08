import { StyledButtons, Button } from "./styled";

export const Buttons = ({ onResetClick }) => (
    <StyledButtons>
        <Button
            type="submit"
        >
            Convert
        </Button>
        <Button
            onClick={onResetClick}
            type="reset"
            fresh
        >
            Clear
        </Button>
    </StyledButtons>
);