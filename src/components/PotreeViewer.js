import React, { useRef, useEffect, Fragment } from "react";
import "../../public/libs/potree/potree.css";

function PotreeViewer({ pointcloudPath, pointcloudName, description }) {
  // pointcloudPath debe ser la direccion del metadata.json (debe haber tambien un hierarchy.bin y octree.bin en el mismo directorio )
  // pointcloudName nombre a dar al modelo, se puede omitir

  const potreeRenderArea = useRef();
  const potreeSidebarContainer = useRef();

  useEffect(() => {
    window.viewer = new Potree.Viewer(potreeRenderArea.current);
    viewer.setEDLEnabled(false);
    viewer.setFOV(75);
    viewer.setPointBudget(1_000_000);
    viewer.loadSettingsFromURL();
    viewer.setBackground("skybox");
    viewer.setDescription(description);
    viewer.setControls(viewer.earthControls);

    viewer.loadGUI(() => {
      viewer.setLanguage("es");
      // $("#menu_tools").next().show();
      const menuTools = document.getElementById("menu_tools");
      menuTools.nextElementSibling.style.display = "block";
      menuTools.style.display = "none";

      // $("#menu_clipping").next().show();
      const menuClipping = document.getElementById("menu_clipping");
      if (menuClipping) {
        menuClipping.nextElementSibling.style.display = block;
        menuClipping.style.display = "none";
      }

      viewer.toggleSidebar();
    });

    Potree.loadPointCloud(pointcloudPath, pointcloudName, (e) => {
      console.log(e.pointcloud.material);
      let scene = viewer.scene;
      let pointcloud = e.pointcloud;
      let material = pointcloud.material;
      material.size = 1;
      material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
      // material.activeAttributeName = "rgba";
      material.shape = Potree.PointShape.SQUARE;
      scene.addPointCloud(pointcloud);

      viewer.fitToScreen();
    });
  }, []);
  return (
    <Fragment>
      <div id="potree_render_area" ref={potreeRenderArea}></div>
      <div id="potree_sidebar_container" ref={potreeSidebarContainer}></div>
    </Fragment>
  );
}

export default PotreeViewer;
