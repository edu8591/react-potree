import React from "react";
import "../public/libs/potree/potree.css";
// import "../public/libs/jquery-ui/jquery-ui.min.css";
// import "../public/libs/openlayers3/ol.css";
// import "../public/libs/spectrum/spectrum.css";
// import "../public/libs/jstree/themes/mixed/style.css";
import PotreeViewer from "./components/PotreeViewer";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        {/* <div id="potree_render_area" style={{ backgroundImage: `url("https://st2.depositphotos.com/4112313/6977/v/600/depositphotos_69779337-stock-illustration-abstract-bright-blue-geometric-background.jpg")` }}></div> */}
        {/* <div id="potree_render_area"></div> */}
        {/* <div id="potree_sidebar_container"> </div> */}
      </div>
    );
  }
}
