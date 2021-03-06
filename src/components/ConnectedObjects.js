import Konva from "konva";
import React from "react";

const ConnectedObjects = () => {
  window.onload = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    var layer = new Konva.Layer();
    stage.add(layer);

    // function to generate a list of "targets" (circles)
    function generateTargets() {
      var number = 10;
      var result = [];
      while (result.length < number) {
        result.push({
          id: "target-" + result.length,
          x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
        });
      }
      return result;
    }

    var targets = generateTargets();

    // function to generate arrows between targets
    function generateConnectors() {
      var number = 10;
      var result = [];
      while (result.length <= number) {
        var from = "target-" + Math.floor(Math.random() * targets.length);
        var to = "target-" + Math.floor(Math.random() * targets.length);
        if (from === to) {
          continue;
        }
        result.push({
          id: "connector-" + result.length,
          from: from,
          to: to,
        });
      }
      return result;
    }

    function getConnectorPoints(from, to) {
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      let angle = Math.atan2(-dy, dx);

      const radius = 50;

      return [
        from.x + -radius * Math.cos(angle + Math.PI),
        from.y + radius * Math.sin(angle + Math.PI),
        to.x + -radius * Math.cos(angle),
        to.y + radius * Math.sin(angle),
      ];
    }

    var connectors = generateConnectors();

    // update all objects on the canvas from the state of the app
    const updateObjects = () => {
      targets.forEach((target) => {
        var node = layer.findOne("#" + target.id);
        node.x(target.x);
        node.y(target.y);
      });

      connectors.forEach((connect) => {
        var line = layer.findOne("#" + connect.id);
        var fromNode = layer.findOne("#" + connect.from);
        var toNode = layer.findOne("#" + connect.to);

        const points = getConnectorPoints(
          fromNode.position(),
          toNode.position()
        );
        line.points(points);
      });
      layer.batchDraw();
    };

    // generate nodes for the app
    connectors.forEach((connect) => {
      var line = new Konva.Line({
        stroke: "black",
        id: connect.id,
        fill: "black",
        strokeWidth: 2,
        tension: 0.5,
      });
      layer.add(line);
    });

    targets.forEach((target) => {
      var node = new Konva.Circle({
        id: target.id,
        fill: Konva.Util.getRandomColor(),
        radius: 20 + Math.random() * 20,
        shadowBlur: 10,
        draggable: true,
      });
      layer.add(node);

      node.on("dragmove", () => {
        // mutate the state
        target.x = node.x();
        target.y = node.y();

        // update nodes from the new state
        updateObjects();
      });
    });

    updateObjects();
  };

  return <div id="container"></div>;
};

export default ConnectedObjects;
