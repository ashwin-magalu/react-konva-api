import Konva from "konva";
import React from "react";

const Label = () => {
  window.onload = () => {
    var stage = new Konva.Stage({
      container: "container",
      width: window.innerWidth,
      height: window.innerHeight,
    });

    var layer = new Konva.Layer();

    // tooltip
    var tooltip = new Konva.Label({
      x: 170,
      y: 75,
      opacity: 0.75,
    });

    tooltip.add(
      new Konva.Tag({
        fill: "black",
        pointerDirection: "down",
        pointerWidth: 10,
        pointerHeight: 10,
        lineJoin: "round",
        shadowColor: "black",
        shadowBlur: 10,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
        shadowOpacity: 0.5,
      })
    );

    tooltip.add(
      new Konva.Text({
        text: "Tooltip pointing down",
        fontFamily: "Calibri",
        fontSize: 18,
        padding: 5,
        fill: "white",
      })
    );

    // label with left pointer
    var labelLeft = new Konva.Label({
      x: 20,
      y: 130,
      opacity: 0.75,
    });

    labelLeft.add(
      new Konva.Tag({
        fill: "green",
        pointerDirection: "left",
        pointerWidth: 20,
        pointerHeight: 28,
        lineJoin: "round",
      })
    );

    labelLeft.add(
      new Konva.Text({
        text: "Label pointing left",
        fontFamily: "Calibri",
        fontSize: 18,
        padding: 5,
        fill: "white",
      })
    );

    // simple label
    var simpleLabel = new Konva.Label({
      x: 180,
      y: 150,
      opacity: 0.75,
    });

    simpleLabel.add(
      new Konva.Tag({
        fill: "yellow",
      })
    );

    simpleLabel.add(
      new Konva.Text({
        text: "Simple label",
        fontFamily: "Calibri",
        fontSize: 18,
        padding: 5,
        fill: "black",
      })
    );

    // add the labels to layer
    layer.add(tooltip).add(labelLeft).add(simpleLabel);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default Label;
