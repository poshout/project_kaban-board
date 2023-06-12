import { React } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import BackLog from "./BackLog/BackLog";
import Ready from "./Ready/Ready";
import InProgress from "./InProgress/InProgress";
import Finished from "./Finished/Finished";
import css from "./taskboard.module.css"

function TaskBoard({ backLogList, setDescTask, setCountFinished, setCountActive,descTask }) {
  const [backLogTask, setBackLogTask] = useLocalStorage(backLogList, "backLogList");
  const [readyTasks, setReadyTasks] = useLocalStorage([], "readyTasks");
  const [inProgressTasks, setInProgressTasks] = useLocalStorage([],"inProgressTasks");
  const [finishedTasks, setFinishedTasks] = useLocalStorage([],"finishedTasks");

  setCountActive(backLogTask.length)
  setCountFinished(finishedTasks.length)
  return (
    <>
      <div className={css.Container}>
        <BackLog
          backLogState={[backLogTask, setBackLogTask]}
          setDescTask={setDescTask}
          descTask={descTask}
          setCountActive={setCountActive}
        />

        <Ready
          setDescTask={setDescTask}
          descTask={descTask}
          readyState={[readyTasks, setReadyTasks]}
          backLogState={[backLogTask, setBackLogTask]}
 
        />
        <InProgress
          readyState={[readyTasks, setReadyTasks]}
          inProgressState={[inProgressTasks, setInProgressTasks]}
          setDescTask={setDescTask}
          descTask={descTask}
    
        />
        <Finished
          finishedState={[finishedTasks, setFinishedTasks]}
          inProgressState={[inProgressTasks, setInProgressTasks]}
          setDescTask={setDescTask}
          descTask={descTask}
  
        />
      </div>
    </>
  );
}

export default TaskBoard;
