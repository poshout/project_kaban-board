import React from "react";
import css from "./button.module.css";


const Button = ({type, appearance, disabled, onClick, children}) =>{
const classNames = [css.btn]
if (appearance){
    classNames.push(css[appearance])
}

    return(
        <button
            type={type || 'button'}
            className={classNames.join(" ")}
            onClick={onClick}
            disabled={disabled}>

            {children}

        </button>
    );
};

export default Button;