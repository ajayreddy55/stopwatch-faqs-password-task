import StopWatch from "./components/stopwatch-task";
import FaqsTask from "./components/faqs-task";
import PasswordManager from "./components/passwords-manager-task";
import "./App.css";

const App = () => {
  return (
    <>
      <StopWatch />
      <FaqsTask />
      <PasswordManager />
    </>
  );
};

export default App;
