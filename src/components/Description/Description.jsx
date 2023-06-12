import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Close } from "../../img/close.svg";
import css from "./description.module.css"
import Button from "../UI/Button/Button";
import Textarea from "../UI/Textarea/Textarea";

function Description(props) {
  const navigate = useNavigate();
  const [descTask, setDescTask] = [
    props.descTask,
    props.setDescTask,
  ];
  const [textarea, setTextarea] = useState(descTask.description);
  const [isActive, setIsActive] = useState(false);
  function changeDescription() {
    const newDescription = {
      name: descTask.name,
      id: descTask.id,
      description: textarea,
    };
    setDescTask(newDescription);
    setIsActive(!isActive);
  }

  return (
    <div className={css.Container}>
      <div className={css.Header}>
        <h3>{descTask.name}</h3>
        <button className={css.Close} onClick={() => navigate(-1)}>
            <Close />
        </button>
      </div>
      <p style={{ display: `${isActive ? "none" : "block"}` }}>
        {descTask.description}
      </p>
      {isActive  && <Textarea
        onChange={(e) => setTextarea(e.target.value)}
        value={textarea}
      />}
      <Button
        appearance="Change"
        onClick={(e) => changeDescription()}>
      {`${isActive ? "Apply changes" : "✎ Edit"}`}
      </Button>
    </div>
  );
}

export default Description;
