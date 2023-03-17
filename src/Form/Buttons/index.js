import "./style.css";

export const Buttons = ({ onResetClick }) => (
    <p>
        <button
            className="form__button"
            type="submit"
        >
            Convert
        </button>
        <button
            className="form__button"
            onClick={onResetClick}
        >
            Clear
        </button>
    </p>
);