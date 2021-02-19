import Konva from "konva";
import React from "react";

const Ring = () => {
  window.onload = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var ring = new Konva.Ring({
      x: stage.width() / 2,
      y: stage.height() / 2,
      innerRadius: 40,
      outerRadius: 70,
      fill: "yellow",
      stroke: "black",
      strokeWidth: 4,
    });

    // add the shape to the layer
    layer.add(ring);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default Ring;
