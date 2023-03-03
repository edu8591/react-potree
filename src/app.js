import React from "react";
import "../public/libs/potree/potree.css";
import PotreeViewer from "./components/PotreeViewer";
// import "../public/libs/jquery-ui/jquery-ui.min.css";
// import "../public/libs/openlayers3/ol.css";
// import "../public/libs/spectrum/spectrum.css";
// import "../public/libs/jstree/themes/mixed/style.css";

function App() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
      }}
    >
      <PotreeViewer
        pointcloudPath={"./pointclouds/test/metadata.json"}
        pointcloudName={"test"}
        description={"esto es una prueba"}
      />
    </div>
  );
}

export default App;
