import Konva from "konva";
import React from "react";

const Wedge = () => {
  window.onload = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var wedge = new Konva.Wedge({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      angle: 60,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
      rotation: -120,
    });

    // add the shape to the layer
    layer.add(wedge);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default Wedge;
