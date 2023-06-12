import css from "./textarea.module.css"

const Textarea = ({ value, onChange}) => {
    return (
      <textarea
        className={css.Textarea}
        onChange={onChange}
        value={value}
      />
    );
  };
  
  export default Textarea;
  