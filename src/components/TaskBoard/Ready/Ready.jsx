import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./ready.module.css";
import Button from "../../UI/Button/Button";

function Ready({readyState,backLogState,setDescTask,descTask}) {
  
  const [backLogTask, setBackLogTask] = [...backLogState];
  const [readyTasks, setReadyTasks] = [...readyState];
  const [isActive, setIsActive] = useState(false);
  const [stateAddBtn, setStateAddBtn] = useState(false);

  useEffect(() => {
    setReadyTasks(
      readyTasks.map((task) => {
        if (task.id === descTask.id) {
          return (task = descTask);
        }
        return task;
      })
    );
  }, [descTask]);

  function taskSwitch(task) {
    setIsActive(false);
    setStateAddBtn(false);

    setReadyTasks(
      readyTasks.concat([
        {
          id: task.id,
          name: task.name,
          description: task.description,
        },
      ])
    );
    setBackLogTask(backLogTask.filter((value) => value !== task));
  }
  return (
    <div className={css.TaskList}>
      <span className={css.Header}>Ready</span>
      <div className={css.Items}>
        {readyTasks.map((task) => {
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
        className={css.DropdownContainer}
        style={{ display: `${stateAddBtn ? "block" : "none"}` }}
      >
        <Button
          appearance="Dropdown"
          onClick={(e) => setIsActive(!isActive)}>
            Please select the task
        </Button>
        {isActive && (
          <ul className={css.DropdownList}>
            {backLogTask.map((task, index) => {
              return (
                <li
                  className={css.DropdownItem}
                  key={index}
                  onClick={(e) => taskSwitch(task)}
                >
                  {task.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className={css.AddTask}>
        <Button
          disabled={backLogTask.length ? false : true}
          onClick={() => setStateAddBtn(!stateAddBtn)}>
          +Add card
        </Button>
      </div>
    </div>
  );
}

export default Ready;
