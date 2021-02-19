import Konva from "konva";
import React from "react";

const Arrow = () => {
  window.onload = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var arrow = new Konva.Arrow({
      x: 100,
      y: 50,
      points: [0, 0, 300, 250],
      pointerLength: 20,
      pointerWidth: 20,
      fill: "black",
      stroke: "black",
      strokeWidth: 4,
    });

    // add the shape to the layer
    layer.add(arrow);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default Arrow;
