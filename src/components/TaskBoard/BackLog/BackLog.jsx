import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uniqid from "uniqid";
import css from './backlog.module.css';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";




function BackLog({ backLogState, setDescTask, descTask }) {
  const [backLogTask, setBackLogTask] = [...backLogState];
  const [inputValue, setInputValue] = useState("");
  const [inputState, setInputState] = useState(false);
  useEffect(() => {
    setBackLogTask(
      backLogTask.map((task) => {
        if (task.id === descTask.id) {
          return (task = descTask);
        }
        return task;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descTask]);

  function addTask() {
    if (inputValue.length > 0 && +inputValue !== 0) {
      setBackLogTask(
        backLogTask.concat([
          {
            id: uniqid(),
            name: inputValue,
            description: "This task has no description",
            created:new Date().toString(),
          },
        ])
      );
      setInputState(false);
      setInputValue("");
    }
  }
 
  return (
    <div className={css.TaskList}>
      <span className={css.Header}>Backlog</span>
      <div className={css.Items}>
        {backLogTask.map((task) => {
          return (
            <Link
              to={`/description/${task.id}`}
              className={css.Item}
              key={task.id}
              onClick={(e) => setDescTask(task)}
            >
           {task.name}
            </Link>
          );
        })}
      </div>
      <div
        className={css.InputWrapper}
        style={{ display: `${inputState ? "block" : ""}` }}
      >
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className={css.AddTask}>
     
        {inputState? 
      
        <Button
          appearance="Submit"
          onClick={addTask}
          type="submit">Submit</Button>
        :
        <Button onClick={() => setInputState(true)}>+Add card</Button>
        }
      </div>
    </div>

  );
}

export default BackLog;
