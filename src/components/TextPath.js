import Konva from "konva";
import React from "react";

const TextPath = () => {
  window.onload = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();

    var textpath = new Konva.TextPath({
      x: 10,
      y: 50,
      fill: "#333",
      fontSize: 16,
      fontFamily: "Arial",
      text:
        "All the world's a stage, and all the men and women merely players.",
      data: "M10,10 C0,0 10,150 100,100 S300,150 5.0.300",
    });

    layer.add(textpath);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default TextPath;
