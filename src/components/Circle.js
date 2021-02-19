import Konva from "konva";
import React from "react";

const Circle = () => {
  window.onload = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
    });

    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default Circle;
