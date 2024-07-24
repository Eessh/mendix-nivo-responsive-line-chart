## Nivo Responsive Line Chart

Responsive Line chart ported from the Nivo charts library.

## Features

-   Responsive, occupies width and height of parent container.
-   More customization options.
-   Theming support.
-   Data is based on JSON, doesn't use mendix objects.

## Usage

Just download from the marketplace. Will be readily usable, no extra configuration required.

## Demo project

Will be coming in future :)

## Issues, suggestions and feature requests

> Issues: https://github.com/Eessh/mendix-nivo-responsive-line-chart/issues

> Pull Requests: https://github.com/Eessh/mendix-nivo-responsive-line-chart/pulls

## Screenshots

![Demo Example](./screenshots/DemoExample.png) ![Data Soruce](./screenshots/DataSource.png)
![Properties](./screenshots/Properties.png) ![Axis Bottom](./screenshots/AxisBottom.png)
![X Scale Spec](./screenshots/XScaleSpec.png) ![Y Scale Spec](./screenshots/YScaleSpec.png)

## Defaults

<details>
    <summary>Theme</summary>

    {
        "background": "#ffffff",
        "text": {
            "fontSize": 11,
            "fill": "#333333",
            "outlineWidth": 0,
            "outlineColor": "transparent"
        },
        "axis": {
            "domain": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 1
                }
            },
            "legend": {
                "text": {
                    "fontSize": 12,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "ticks": {
                "line": {
                    "stroke": "#777777",
                    "strokeWidth": 1
                },
                "text": {
                    "fontSize": 11,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "grid": {
            "line": {
                "stroke": "#dddddd",
                "strokeWidth": 1
            }
        },
        "legends": {
            "title": {
                "text": {
                    "fontSize": 11,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            },
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "ticks": {
                "line": {},
                "text": {
                    "fontSize": 10,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                }
            }
        },
        "annotations": {
            "text": {
                "fontSize": 13,
                "fill": "#333333",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            },
            "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
            }
        },
        "tooltip": {
            "wrapper": {},
            "container": {
                "background": "#ffffff",
                "color": "#333333",
                "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
        }
    }
</details>

<details>
    <summary>Data</summary>

    [
        {
            "id": "japan",
            "color": "hsl(322, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 115
                },
                {
                    "x": "helicopter",
                    "y": 107
                },
                {
                    "x": "boat",
                    "y": 190
                },
                {
                    "x": "train",
                    "y": 251
                },
                {
                    "x": "subway",
                    "y": 176
                },
                {
                    "x": "bus",
                    "y": 87
                },
                {
                    "x": "car",
                    "y": 276
                },
                {
                    "x": "moto",
                    "y": 293
                },
                {
                    "x": "bicycle",
                    "y": 80
                },
                {
                    "x": "horse",
                    "y": 30
                },
                {
                    "x": "skateboard",
                    "y": 109
                },
                {
                    "x": "others",
                    "y": 12
                }
                ]
            },
            {
                "id": "france",
                "color": "hsl(255, 70%, 50%)",
                "data": [
                {
                    "x": "plane",
                    "y": 55
                },
                {
                    "x": "helicopter",
                    "y": 84
                },
                {
                    "x": "boat",
                    "y": 242
                },
                {
                    "x": "train",
                    "y": 286
                },
                {
                    "x": "subway",
                    "y": 152
                },
                {
                    "x": "bus",
                    "y": 19
                },
                {
                    "x": "car",
                    "y": 55
                },
                {
                    "x": "moto",
                    "y": 162
                },
                {
                    "x": "bicycle",
                    "y": 194
                },
                {
                    "x": "horse",
                    "y": 205
                },
                {
                    "x": "skateboard",
                    "y": 86
                },
                {
                    "x": "others",
                    "y": 119
                }
                ]
            },
            {
                "id": "us",
                "color": "hsl(94, 70%, 50%)",
                "data": [
                {
                    "x": "plane",
                    "y": 225
                },
                {
                    "x": "helicopter",
                    "y": 78
                },
                {
                    "x": "boat",
                    "y": 203
                },
                {
                    "x": "train",
                    "y": 13
                },
                {
                    "x": "subway",
                    "y": 126
                },
                {
                    "x": "bus",
                    "y": 90
                },
                {
                    "x": "car",
                    "y": 215
                },
                {
                    "x": "moto",
                    "y": 137
                },
                {
                    "x": "bicycle",
                    "y": 105
                },
                {
                    "x": "horse",
                    "y": 70
                },
                {
                    "x": "skateboard",
                    "y": 29
                },
                {
                    "x": "others",
                    "y": 146
                }
                ]
            },
            {
                "id": "germany",
                "color": "hsl(358, 70%, 50%)",
                "data": [
                {
                    "x": "plane",
                    "y": 250
                },
                {
                    "x": "helicopter",
                    "y": 105
                },
                {
                    "x": "boat",
                    "y": 144
                },
                {
                    "x": "train",
                    "y": 251
                },
                {
                    "x": "subway",
                    "y": 10
                },
                {
                    "x": "bus",
                    "y": 242
                },
                {
                    "x": "car",
                    "y": 296
                },
                {
                    "x": "moto",
                    "y": 201
                },
                {
                    "x": "bicycle",
                    "y": 192
                },
                {
                    "x": "horse",
                    "y": 87
                },
                {
                    "x": "skateboard",
                    "y": 135
                },
                {
                    "x": "others",
                    "y": 109
                }
                ]
            },
            {
                "id": "norway",
                "color": "hsl(9, 70%, 50%)",
                "data": [
                {
                    "x": "plane",
                    "y": 83
                },
                {
                    "x": "helicopter",
                    "y": 177
                },
                {
                    "x": "boat",
                    "y": 86
                },
                {
                    "x": "train",
                    "y": 37
                },
                {
                    "x": "subway",
                    "y": 108
                },
                {
                    "x": "bus",
                    "y": 165
                },
                {
                    "x": "car",
                    "y": 170
                },
                {
                    "x": "moto",
                    "y": 146
                },
                {
                    "x": "bicycle",
                    "y": 102
                },
                {
                    "x": "horse",
                    "y": 1
                },
                {
                    "x": "skateboard",
                    "y": 203
                },
                {
                    "x": "others",
                    "y": 26
                }
            ]
        }
    ]
</details>

<details>
    <summary>Legends</summary>

    [
        {
            "anchor": "bottom",
            "direction": "row",
            "justify": false,
            "translateX": 0,
            "translateY": 60,
            "itemsSpacing": 0,
            "itemDirection": "left-to-right",
            "itemWidth": 80,
            "itemHeight": 20,
            "itemOpacity": 0.75,
            "symbolSize": 12,
            "symbolShape": "circle",
            "symbolBorderColor": "rgba(0, 0, 0, .5)",
            "effects": [
                {
                    "on": "hover",
                    "style": {
                        "itemBackground": "rgba(0, 0, 0, .03)",
                        "itemOpacity": 1
                    }
                }
            ]
        }
    ]
</details>

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.
