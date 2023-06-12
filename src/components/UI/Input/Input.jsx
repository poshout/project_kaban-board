import css from "./input.module.css"

const Input = ({ type, name, value, placeholder, onChange, onKeyUp }) => {
    return (
      <input
        className={css.Input}
        type={type || "text"}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
      />
    );
  };
  
  export default Input;