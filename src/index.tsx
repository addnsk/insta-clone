import { StrictMode } from "react";
import { render } from "react-dom";
import { Theme } from "./components/Theme";
import { LogInForm } from "containers/LogInForm/LogInForm";

const App = () => {
  return (
    <Theme>
      <LogInForm />
    </Theme>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
