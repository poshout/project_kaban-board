import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from './progress.module.css';
import Button from "../../UI/Button/Button";


function InProgress({readyState,inProgressState,  setDescTask, descTask,}) {
  
  const [inProgressTasks, setInProgressTasks] = [...inProgressState];
  const [readyTasks, setReadyTasks] = [...readyState];
  const [isActive, setIsActive] = useState(false);
  const [stateAddBtn, setStateAddBtn] = useState(false);

  useEffect(() => {
    setInProgressTasks(
      inProgressTasks.map((task) => {
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
    setInProgressTasks(
      inProgressTasks.concat([
        {
          id: task.id,
          name: task.name,
          description: task.description,
        },
      ])
    );
    setReadyTasks(readyTasks.filter((value) => value !== task));
  }

  return (
    <div className={css.TaskList}>
      <span className={css.Header}>In Progress</span>
      <div className={css.Items}>
        {inProgressTasks.map((task, index) => {
          return (
            <Link
              to={`/description/${task.id}`}
              className={css.Item}
              key={index}
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
          onClick={(e) => setIsActive(!isActive)}
        >
        Please select the task </Button>

        {isActive && (
          <ul className={css.DropdownList}>
            {readyTasks.map((task, index) => {
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
          disabled={readyTasks.length ? false : true}
          onClick={() => setStateAddBtn(!stateAddBtn)}
        >
          +Add card
        </Button>
      </div>
    </div>
  );
}

export default InProgress;
