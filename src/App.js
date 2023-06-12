import {React} from "react";
import { Routes, Route} from "react-router-dom";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import Description from "./components/Description/Description";
import Layout from "./components/Layout";
import useLocalStorage from "./hooks/useLocalStorage";
import backLogList from "./mockdata";

function App() {
  
  const [descTask, setDescTask] = useLocalStorage({}, "descTask")
  const [countActive, setCountActive] = useLocalStorage(0, "amountActive")
  const [countFinished, setCountFinished] = useLocalStorage(0, "amountFinished")

  return (
    <>
      <Routes>
        <Route path="/" element={
        <Layout countActive={countActive}
      countFinished={countFinished} />
        }>
          <Route index element={
            <TaskBoard backLogList={backLogList}
              descTask={descTask} 
              setDescTask={setDescTask} 
              setCountActive={setCountActive}
              setCountFinished={setCountFinished}
              />
          } />
          <Route path="/description/:id" element={
            <Description descTask={descTask}  setDescTask={setDescTask}/>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
