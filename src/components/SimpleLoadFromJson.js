import Konva from "konva";
import React from "react";

const SimpleLoadFromJson = () => {
  window.onload = () => {
    var json =
      '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":5,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}';

    // create node using json string
    var stage = Konva.Node.create(json, "container");
  };

  return <div id="container"></div>;
};

export default SimpleLoadFromJson;
