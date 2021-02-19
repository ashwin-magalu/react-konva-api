import Konva from "konva";
import React from "react";

const RegularPolygon = () => {
  window.onload = () => {
    var stage = new Konva.Stage({
      container: "container",
      width: window.innerWidth,
      height: window.innerHeight,
    });

    var layer = new Konva.Layer();

    var hexagon = new Konva.RegularPolygon({
      x: 100,
      y: 150,
      sides: 6,
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
    });

    layer.add(hexagon);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default RegularPolygon;
