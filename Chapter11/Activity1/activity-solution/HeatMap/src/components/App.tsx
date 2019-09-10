import * as React from "react";

const batter = require("../assets/batter.png");
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
      <div style={{ marginTop: "150px" }}>
        <HeatMapGraph width={300} height={450} />
      </div>

      <div>
        <img src={batter} />
      </div>
    </div>
  );
};

export default App;
