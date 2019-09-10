import * as React from "react";
import HeatMapGraph from "./HeatMapGraph";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <HeatMapGraph width={900} height={900} />
    </div>
  );
};

export default App;
