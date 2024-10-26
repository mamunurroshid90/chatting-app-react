import "./App.css";
import LoginFormCompo from "./components/login/LoginComp";
import RegFormCompo from "./components/registration/RegistrationComp";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <RegFormCompo />
      {/* <LoginFormCompo /> */}
    </>
  );
}

export default App;
