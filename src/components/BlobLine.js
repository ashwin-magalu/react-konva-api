import Konva from "konva";
import React, { useEffect } from "react";

const BlobLine = () => {
  useEffect(() => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var blob = new Konva.Line({
      points: [23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93],
      fill: "#00D2FF",
      stroke: "black",
      strokeWidth: 5,
      closed: true, // closes the design, links last point to first point
      tension: 0.3,
    });

    // add the shape to the layer
    layer.add(blob);

    // add the layer to the stage
    stage.add(layer);
    return () => {};
  }, []);

  return <div id="container"></div>;
};

export default BlobLine;
