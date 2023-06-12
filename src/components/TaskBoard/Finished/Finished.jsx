import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import css from "./finished.module.css";
import Button from "../../UI/Button/Button";

function Finished({inProgressState, finishedState,setDescTask,descTask,}) {
  
  const [finishedTasks, setFinishedTasks] = [...finishedState];
  const [inProgressTasks, setInProgressTasks] = [...inProgressState];
  const [isActive, setIsActive] = useState(false);
  const [stateAddBtn, setStateAddBtn] = useState(false);

  useEffect(() => {
    setFinishedTasks(
      finishedTasks.map((task) => {
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
    setFinishedTasks(
      finishedTasks.concat([
        {
          id: task.id,
          name: task.name,
          description: task.description,
        },
      ])
    );
    setInProgressTasks(inProgressTasks.filter((value) => value !== task));
  }
  return (
    <div className={css.TaskList}>
      <span className={css.Header}>Finished</span>
      <div className={css.Items}>
        {finishedTasks.map((task, index) => {
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
          onClick={(e) => setIsActive(!isActive)}>
          Please select the task
        </Button>
        
        {isActive && (
          <ul className={css.DropdownList}>
            {inProgressTasks.map((task, index) => {
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
          disabled={inProgressTasks.length ? false : true}
          onClick={() => setStateAddBtn(!stateAddBtn)}
        >
          +Add card
        </Button>
      </div>
    </div>
  );
}

export default Finished;
