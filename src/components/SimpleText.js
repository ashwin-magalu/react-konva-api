import Konva from "konva";
import React from "react";

const SimpleText = () => {
  window.onload = () => {
    var stage = new Konva.Stage({
      container: "container",
      width: 340,
      height: 300,
    });

    var layer = new Konva.Layer();

    var simpleText = new Konva.Text({
      x: stage.width() / 2,
      y: 15,
      text: "Simple Text",
      fontSize: 30,
      fontFamily: "Calibri",
      fill: "green",
    });

    // to align text in the middle of the screen, we can set the
    // shape offset to the center of the text shape after instantiating it
    simpleText.offsetX(simpleText.width() / 2);

    // since this text is inside of a defined area, we can center it using
    // align: 'center'
    var complexText = new Konva.Text({
      x: 20,
      y: 60,
      text:
        "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
      fontSize: 18,
      fontFamily: "Calibri",
      fill: "#555",
      width: 300,
      padding: 20,
      align: "center",
    });

    var rect = new Konva.Rect({
      x: 20,
      y: 60,
      stroke: "#555",
      strokeWidth: 5,
      fill: "#ddd",
      width: 300,
      height: complexText.height(),
      shadowColor: "black",
      shadowBlur: 10,
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowOpacity: 0.2,
      cornerRadius: 20,
    });

    // add the shapes to the layer
    layer.add(simpleText);
    layer.add(rect);
    layer.add(complexText);

    // add the layer to the stage
    stage.add(layer);
  };

  return <div id="container"></div>;
};

export default SimpleText;
