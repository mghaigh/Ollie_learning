const shapeData = {
    "shape1": {
        type: "rect",
        colour: 'red',
        centre: {
            x: 100,
            y: 100
        },
        size: {
            width: 200,
            height: 100
        }
    },
    "shape2": {
        type: "circle",
        colour: "blue",
        centre: {
            x: 200,
            y: 200
        },
        size: {
            radius: 200,
        }
    },
    "shape3": {
        type: "rect",
        colour: 'yellow',
        centre: {
            x: 500,
            y: 400
        },
        size: {
            width: 400,
            height: 200
        }
    },
    "shape4": {
        type: "circle",
        colour: 'green',
        centre: {
            x: 350,
            y: 300
        },
        size: {
            radius: 400,
        }
    }
};

const draw = SVG('drawing').size(700, 700);

for (const shapeName in shapeData) {
    const shapeDef = shapeData[shapeName];
    console.log(shapeDef);
    let shape;
    switch (shapeDef.type) {
        case 'rect':
            shape = draw.rect(shapeDef.size.width, shapeDef.size.height);
            break;
        case 'circle':
            shape = draw.circle(shapeDef.size.radius);
            break;
    }
    draw.circle();
    shape.center(shapeDef.centre.x, shapeDef.centre.y).attr({fill: shapeDef.colour});
}


const ring = draw.circle(180).attr({fill: 'yellow', 'fill-opacity': '0.5', stroke: 'purple', 'stroke-width': 10});

ring.animate().move(500, 500).loop(true, true);
