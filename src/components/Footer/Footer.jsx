import React from "react";
import css from "./footer.module.css"

function Footer({countActive, countFinished}) {
    return (
        <footer className={css.Container}>
        <div className={css.Footer}>
          <div className={css.Result}>
            <span>{`Active tasks: ${countActive}`} </span>
            <span style={{marginLeft:"10px"}}>{`Finished tasks: ${countFinished}`}</span>
          </div>
        </div>
      </footer>
    )
}

export default Footer;