import React, {useState} from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [showing, setShowing] = useState(true);

  const toggle = () => {
    setShowing(!showing);
  };

  return (
    <>
      <button className="button" onClick={toggle}>
        Show / Hide
      </button>
      {showing && (
        <>
          <Clock location="London" offset={0} />
          <Clock location="Kyiv" offset={2} />
          <Clock location="New York" offset={-5} />
        </>
      )}
    </>
  );
};

export default App;
