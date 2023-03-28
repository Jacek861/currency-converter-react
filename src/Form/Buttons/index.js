import { DivButtons, Button } from "./styled";

export const Buttons = ({ onResetClick }) => (
    <DivButtons>
        <Button
            type="submit"
        >
            Convert
        </Button>
        <Button
            onClick={onResetClick}
            type="reset"
        >
            Clear
        </Button>
    </DivButtons>
);