import "./style.css";

export const Buttons = () => (
    <p>
        <button
            className="form__button"
            type="submit"
        >
            Convert
        </button>
        <button
            type="reset"
            className="form__button"
            
        >
            Clear
        </button>
    </p>
);