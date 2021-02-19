import Konva from "konva";
import React from "react";

const SaveAsJson = () => {
  window.onload = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var hexagon = new Konva.RegularPolygon({
      x: width / 2,
      y: height / 2,
      sides: 6,
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
    });

    // add the shape to the layer
    layer.add(hexagon);

    // add the layer to the stage
    stage.add(layer);

    // save stage as a json string
    var json = stage.toJSON();

    console.log(json);
  };

  return <div id="container"></div>;
};

export default SaveAsJson;
