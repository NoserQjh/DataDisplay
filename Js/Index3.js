/*
 * @Author: NoserQJH
 * @LastEditors: NoserQJH
 * @Date: 2019-08-28 10:59:26
 * @LastEditTime: 2019-08-28 11:02:11
 * @Description:
 */
var diameter = 960,
    radius = diameter / 2,
    innerRadius = radius - 120;

var cluster = d3.cluster()
    .size([360, innerRadius]);

var line = d3.radialLine()
    .curve(d3.curveBundle.beta(0.75))
    .radius(function (d) {
        return d.y;
    })
    .angle(function (d) {
        return d.x / 180 * Math.PI;
    });

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");
d3.json("./Js/Json/flare.json", function (error, classes) {
    if (error) throw error;

    var root = packageHierarchy(classes)
        .sum(function (d) {
            return d.size;
        });

    cluster(root);

    link = link
        .data(packageImports(root.leaves()))
        .enter().append("path")
        .each(function (d) {
            d.source = d[0], d.target = d[d.length - 1];
        })
        .attr("class", "link")
        .attr("d", line)
        .attr("stroke-width", (function (d) {
            return d[0].data.imports[d.target.data.name];
        }))
    node = node
        .data(root.leaves())
        .enter().append("text")
        .attr("class", "node")
        .attr("dy", "0.31em")
        .attr("transform", function (d) {
            return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" :
                "rotate(180)");
        })
        .attr("text-anchor", function (d) {
            return d.x < 180 ? "start" : "end";
        })
        .text(function (d) {
            return d.data.key;
        })
        .on("mouseover", function (d, i) {
            var name = this.textContent
            link = link.attr("stroke-width", (function (d) {
                    if (name == d.source.data.key) {
                        return d[0].data.imports[d.target.data.name] * 3;
                    }
                    if (name == d.target.data.key) {
                        return d[0].data.imports[d.target.data.name] * 3;
                    }
                    return d[0].data.imports[d.target.data.name];
                }))
                .attr("opacity", (function (d) {
                    if (name == d.source.data.key) {
                        return 1;
                    }
                    if (name == d.target.data.key) {
                        return 1;
                    }
                    return 0.1;
                }))
                .style("stroke", (function (d) {
                    if (name == d.source.data.key) {
                        return "green";
                    }
                    if (name == d.target.data.key) {
                        return "green";
                    }
                    return "steelblue";
                }))
        })
        .on("mouseout", function (d, i) {
            var name = this.textContent
            link = link.attr("stroke-width", (function (d) {
                    return d[0].data.imports[d.target.data.name];
                }))
                .attr("opacity", 0.5)
                .style("stroke", "steelblue")
        });
});

// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
    var map = {};

    function find(name, data) {
        var node = map[name],
            i;
        if (!node) {
            node = map[name] = data || {
                name: name,
                children: []
            };
            if (name.length) {
                node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                node.parent.children.push(node);
                node.key = name.substring(i + 1);
            }
        }
        return node;
    }

    classes.forEach(function (d) {
        find(d.name, d);
    });

    return d3.hierarchy(map[""]);
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
    var map = {},
        imports = [];

    // Compute a map from name to node.
    nodes.forEach(function (d) {
        map[d.data.name] = d;
    });

    // For each import, construct a link from the source to target node.
    nodes.forEach(function (d) {
        if (d.data.imports)
            for (var key in d.data.imports) {
                imports.push(map[d.data.name].path(map[key]));
            };
    });

    return imports;
}
