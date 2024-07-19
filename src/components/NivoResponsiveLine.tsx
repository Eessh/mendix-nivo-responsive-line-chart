import { ReactElement, createElement } from "react";
import { Datum, ResponsiveLine } from "@nivo/line";
import { Box, CompleteTheme } from "@nivo/core";
import { AxisProps } from "@nivo/axes";
import { ScaleSpec } from "@nivo/scales";
import { LegendProps } from "@nivo/legends";

export type TNivoResponsiveLineData = {
    id: string;
    color: string;
    data: Datum[];
};

export type TNivoTheme = Partial<{
    background: CompleteTheme["background"];
    text: Partial<CompleteTheme["text"]>;
    axis: Partial<{
        domain: Partial<{
            line: Partial<CompleteTheme["axis"]["domain"]["line"]>;
        }>;
        ticks: Partial<{
            line: Partial<CompleteTheme["axis"]["ticks"]["line"]>;
            text: Partial<CompleteTheme["axis"]["ticks"]["text"]>;
        }>;
    }>;
}>;

type NivoResponsiveLineProps = {
    data?: TNivoResponsiveLineData[];
    theme?: TNivoTheme;
    margin?: Box;
    useMesh?: boolean;
    enableCrosshair?: boolean;
    enableTouchCrosshair?: boolean;
    pointSize?: number;
    pointBorderWidth?: number;
    enablePointLabel?: boolean;
    pointLabel?: string;
    pointLabelYOffset?: number;
    enableGridX?: boolean;
    enableGridY?: boolean;
    axisTop?: AxisProps | null;
    axisRight?: AxisProps | null;
    axisBottom?: AxisProps | null;
    axisLeft?: AxisProps | null;
    xScale?: ScaleSpec | undefined;
    yScale?: ScaleSpec | undefined;
    legends?: LegendProps[] | undefined;
    xFormat?: string | undefined;
    yFormat?: string | undefined;
};

const DefaultProps: NivoResponsiveLineProps = {
    data: [
        {
            id: "japan",
            color: "hsl(322, 70%, 50%)",
            data: [
                {
                    x: "plane",
                    y: 115
                },
                {
                    x: "helicopter",
                    y: 107
                },
                {
                    x: "boat",
                    y: 190
                },
                {
                    x: "train",
                    y: 251
                },
                {
                    x: "subway",
                    y: 176
                },
                {
                    x: "bus",
                    y: 87
                },
                {
                    x: "car",
                    y: 276
                },
                {
                    x: "moto",
                    y: 293
                },
                {
                    x: "bicycle",
                    y: 80
                },
                {
                    x: "horse",
                    y: 30
                },
                {
                    x: "skateboard",
                    y: 109
                },
                {
                    x: "others",
                    y: 12
                }
            ]
        },
        {
            id: "france",
            color: "hsl(255, 70%, 50%)",
            data: [
                {
                    x: "plane",
                    y: 55
                },
                {
                    x: "helicopter",
                    y: 84
                },
                {
                    x: "boat",
                    y: 242
                },
                {
                    x: "train",
                    y: 286
                },
                {
                    x: "subway",
                    y: 152
                },
                {
                    x: "bus",
                    y: 19
                },
                {
                    x: "car",
                    y: 55
                },
                {
                    x: "moto",
                    y: 162
                },
                {
                    x: "bicycle",
                    y: 194
                },
                {
                    x: "horse",
                    y: 205
                },
                {
                    x: "skateboard",
                    y: 86
                },
                {
                    x: "others",
                    y: 119
                }
            ]
        },
        {
            id: "us",
            color: "hsl(94, 70%, 50%)",
            data: [
                {
                    x: "plane",
                    y: 225
                },
                {
                    x: "helicopter",
                    y: 78
                },
                {
                    x: "boat",
                    y: 203
                },
                {
                    x: "train",
                    y: 13
                },
                {
                    x: "subway",
                    y: 126
                },
                {
                    x: "bus",
                    y: 90
                },
                {
                    x: "car",
                    y: 215
                },
                {
                    x: "moto",
                    y: 137
                },
                {
                    x: "bicycle",
                    y: 105
                },
                {
                    x: "horse",
                    y: 70
                },
                {
                    x: "skateboard",
                    y: 29
                },
                {
                    x: "others",
                    y: 146
                }
            ]
        },
        {
            id: "germany",
            color: "hsl(358, 70%, 50%)",
            data: [
                {
                    x: "plane",
                    y: 250
                },
                {
                    x: "helicopter",
                    y: 105
                },
                {
                    x: "boat",
                    y: 144
                },
                {
                    x: "train",
                    y: 251
                },
                {
                    x: "subway",
                    y: 10
                },
                {
                    x: "bus",
                    y: 242
                },
                {
                    x: "car",
                    y: 296
                },
                {
                    x: "moto",
                    y: 201
                },
                {
                    x: "bicycle",
                    y: 192
                },
                {
                    x: "horse",
                    y: 87
                },
                {
                    x: "skateboard",
                    y: 135
                },
                {
                    x: "others",
                    y: 109
                }
            ]
        },
        {
            id: "norway",
            color: "hsl(9, 70%, 50%)",
            data: [
                {
                    x: "plane",
                    y: 83
                },
                {
                    x: "helicopter",
                    y: 177
                },
                {
                    x: "boat",
                    y: 86
                },
                {
                    x: "train",
                    y: 37
                },
                {
                    x: "subway",
                    y: 108
                },
                {
                    x: "bus",
                    y: 165
                },
                {
                    x: "car",
                    y: 170
                },
                {
                    x: "moto",
                    y: 146
                },
                {
                    x: "bicycle",
                    y: 102
                },
                {
                    x: "horse",
                    y: 1
                },
                {
                    x: "skateboard",
                    y: 203
                },
                {
                    x: "others",
                    y: 26
                }
            ]
        }
    ],
    margin: {
        top: 50,
        right: 110,
        bottom: 50,
        left: 60
    },
    useMesh: true,
    enableCrosshair: true,
    enableTouchCrosshair: true,
    pointSize: 10,
    pointBorderWidth: 2,
    enablePointLabel: false,
    pointLabel: "data.yFormatted",
    pointLabelYOffset: 0,
    enableGridX: true,
    enableGridY: true,
    xScale: { type: "point" },
    yScale: {
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false
    },
    legends: [
        {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 60,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
                {
                    on: "hover",
                    style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]
};

const NivoResponsiveLine = (props: NivoResponsiveLineProps): ReactElement => {
    return (
        <ResponsiveLine
            data={props.data ?? DefaultProps.data!}
            theme={props.theme}
            margin={props.margin ?? DefaultProps.margin}
            xScale={props.xScale ?? DefaultProps.xScale}
            yScale={props.yScale ?? DefaultProps.yScale}
            xFormat={props.xFormat}
            yFormat={props.yFormat}
            axisTop={props.axisTop}
            axisRight={props.axisRight}
            axisBottom={props.axisBottom}
            axisLeft={props.axisLeft}
            pointSize={props.pointSize ?? DefaultProps.pointSize}
            pointColor={{ theme: "background" }}
            pointBorderWidth={props.pointBorderWidth ?? DefaultProps.pointBorderWidth}
            pointBorderColor={{ from: "serieColor" }}
            enablePointLabel={props.enablePointLabel ?? DefaultProps.enablePointLabel}
            pointLabel={props.pointLabel ?? DefaultProps.pointLabel}
            pointLabelYOffset={props.pointLabelYOffset ?? DefaultProps.pointLabelYOffset}
            enableCrosshair={props.enableCrosshair ?? DefaultProps.enableCrosshair}
            enableTouchCrosshair={props.enableTouchCrosshair ?? DefaultProps.enableTouchCrosshair}
            useMesh={props.useMesh ?? DefaultProps.useMesh}
            enableGridX={props.enableGridX ?? DefaultProps.enableGridX}
            enableGridY={props.enableGridY ?? DefaultProps.enableGridY}
            legends={props.legends ?? DefaultProps.legends}
        />
    );
};

export default NivoResponsiveLine;
