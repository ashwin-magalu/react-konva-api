# Optimisation targets

## The optimisations here focus on two general rules:

1. Compute as little as possible: all computation takes time to complete. Each individual computation may run in a tiny fraction of a second, but the thousands or millions of computations caused by your code, Konva, JavaScript, and the layers below that, will add up to something more observable by the human eye if that super-slick animation or effect is, in fact, jerky.

2. Draw as little as possible: this is important because all drawing has a performance cost. There are two categories of cost - firstly the computation of the drawing which we covered in the point above, and then the movement of the drawing from memory to the screen. Depending on the case, there may also be intermediate off-screen compositing or per-pixel processing. The rule is therefore do as little drawing as possible.

# The Stage

1. Optimise stage size - following the rule of ‘draw as little as possible’, try to avoid creating a large stage because moving all those bytes from memory to screen is going to have a negative impact. There are some tips here that offer alternative approaches to the mega-stage problem!

2. Set a viewport on mobile - Scaling images is a significant performance hit, so for mobile applications set viewport: <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"> which will avoid unnecessary scaling of your Konva output.

3. Use Konva.pixelRatio = 1 on retina devices - Konva automatically handles pixel ratio adustments in order to render crisp drawings on all devices. But, just in case you have bad performance on retina devices, set Konva.pixelRatio = 1 to reduce the scaling work Konva has to do. This setting might affect the output in some cases, so make sure that quality of the result is ok for you.

# Layers

1. Layer Management - under the hood, each Konva layer is a separate HTML5 canvas element which gives some useful capabilities, including the ability to refresh only a layer that changed and so avoid the performance cost of refreshing the entire stage. But with great power great responsibility comes, and each layer has an incremental performance overhead so we should keep the number of layers to a minimum.

2. Use layer.listening(false) - Konva gives us mouse and touch event listeners on all the shapes we draw. But there is a performance cost for each one, and for a layer with with many shapes Konva has to expend many cycles checking which listeners might be triggered. If you have a layer on which none of the shapes need to react to events, take this burden away by setting layer.listening(false). See Demo. There is a similar point in the shapes section.

3. The layer batchDraw method - use instead of plain layer.draw(). Sprinkle these around as needed and let Konva optimise the number of redraws it actually needs to execute.

4. Optimise dragging costs - while you drag a shape across a layer that layer must be redrawn per cycle of the move event listener. To avoid this performance cost, move the shape to a dedicated layer while dragging, then move it back to original layer at drag end.

# Shapes

1. Shape Caching - internally Konva makes an image of your shape and uses that when the shape has to be drawn. Drawing images avoids the overhead of composing the shape from its drawing instructions, and can increase performance impressively for complex shapes and groups.

2. Shape Redraw - following the rule of ‘draw as little as possible’ this technique is about how to avoid refreshing an entire canvas when refreshing just a single shape is the real requirement.

3. Keep the shapes tidy - each shape in your stage has a cost just to exist. To optimise performance, hide or remove from the layer any objects that become invisible / opacity = 0, or objects that go out of view.

4. Use shape.listening(false) - as with layers (see point 7 above), Konva looks out for when events should be triggered for shapes, which has a performance cost. Telling a shape to stop listening for events reduces this cost, as explained at Listening false.

5. Switch off perfect drawing - In some cases the result of drawing with the HTML5 canvas is not what you might have expected - see the demo for an example Disable Perfect Drawing. Konva does extra work via its perfect drawing feature to put that right, but this comes with a performance cost. By setting shape.perfectDrawEnabled(false) this cost can be avoided, with no reduction in output quality, when a shape has fill, stroke and opacity.

6. Optimize Stroke Drawing - To achieve drawing results that look as expected, Konva makes an extra internal drawing when a shape has both stroke and shadow. Avoid this performance burden by switching off the shadow that Konva adds for the stroke.

7. Use transformsEnabled - internally, Konva uses matrix transformations to achieve visual effects like move, rotate, and skew, applying each as an individual step where multiple transformations are applied to a shape. Working through the list of what transforms might be needed for a shape every time the layer is refreshed has a performance cost that we can avoid when we know that a shape has only simple transforms applied. So, if your shape has only position transformation, meaning x and y, but no scale, rotation, etc, then set shape.’transformsEnabled = ‘position’ and reduce Konva’s processing load.