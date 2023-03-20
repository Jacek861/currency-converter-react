import "./style.css";

export const Buttons = ({ onResetClick }) => (
    <div className="form__container">
        <button
            className="form__button"
            type="submit"
        >
            Convert
        </button>
        <button
            className="form__button"
            onClick={onResetClick}
            type="reset"
        >
            Clear
        </button>
    </div>
);