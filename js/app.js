var template =
    '<svg height="800" width="800"><style>.white{fill:white}</style><line x1="400" y1="-800" x2="400" y2="800" style="stroke: white; stroke-width: 1" /><line x1="-800" y1="400" x2="800" y2="400" style="stroke: white; stroke-width: 1"/>';

function absVal() {
    let arr = [];

    for (i = 0; i < 4; i++) {
        arr.push(Math.floor(Math.random() * 16) - 8);
    }

    if (arr[1] == 0) arr[1] = 1;
    arr[2] = Math.floor(Math.random() * 10) - 5;

    if (arr[0] < 0) {
        slope = -Math.abs(arr[0] * arr[1]) * 16;
    } else {
        slope = Math.abs(arr[0] * arr[1]) * 16;
    }

    vertex_x = (arr[2] / arr[1]) * 16 + 400;
    vertex_y = arr[3] * 16 + 400;

    // [Equation, Vertex, PointLeft, PointRight]
    return [
        `${arr[0]}|${arr[1]}x + ${arr[2]}| + ${arr[3]}`,
        [800 - vertex_x, 800 - vertex_y],
        [800 - vertex_x - 1600, 800 - vertex_y - slope * 100],
        [800 - vertex_x + 1600, 800 - vertex_y - slope * 100],
    ];
}

eq = absVal();

$("#container").html(
    `${template}<text x=${eq[1][0] + 10} y=${eq[1][1] - 10} class="white">${(
        (800 - eq[1][0] - 400) /
        16
    ).toFixed(2)}, ${(800 - eq[1][1] - 400) / 16}</text> <circle cx=${
        eq[1][0]
    } cy=${eq[1][1]} r="5" fill="white" /><polyline points="${eq[2]} ${eq[1]} ${
        eq[3]
    }" fill="none" stroke="white" stroke-width="3" />`
);

$("#equation").html(eq[0]);

$("#slope").html(
    `Slope Left: ${-(slope / 16)}<br />Slope Right: ${slope / 16}`
);

$("#vertex").html(
    `Vertex: (${((800 - eq[1][0] - 400) / 16).toFixed(2)}, ${
        (800 - eq[1][1] - 400) / 16
    })`
);
