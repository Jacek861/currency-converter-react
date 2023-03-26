import "./style.css";

export const Buttons = ({ onResetClick }) => (
    <div className="buttons">
        <button
            className="buttons__button"
            type="submit"
        >
            Convert
        </button>
        <button
            className="buttons__button"
            onClick={onResetClick}
            type="reset"
        >
            Clear
        </button>
    </div>
);