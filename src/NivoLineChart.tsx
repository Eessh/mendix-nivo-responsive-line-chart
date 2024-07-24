import { ReactElement, createElement } from "react";
import NivoResponsiveLine, { TNivoResponsiveLineData, TNivoTheme } from "./components/NivoResponsiveLine";
import { NivoLineChartContainerProps } from "typings/NivoLineChartProps";
import { ScaleSpec } from "@nivo/scales";
import { LegendProps } from "@nivo/legends";
import { CartesianMarkerProps } from "@nivo/core";

import "./ui/NivoLineChart.css";

export function NivoLineChart(props: NivoLineChartContainerProps): ReactElement {
    let parsedData: TNivoResponsiveLineData[];
    try {
        parsedData = JSON.parse(props.data.value!) as TNivoResponsiveLineData[];
    } catch (e) {
        return <span>{"Error in Chart Data (JSON): " + e.message}</span>;
    }

    // Returning if no legends data
    if (props.legendsType === "specify" && !props.legends?.value) {
        return <span>{"Error in Legends JSON Data: No legends data!"}</span>;
    }

    let parsedMarkers: CartesianMarkerProps[] | undefined;
    try {
        parsedMarkers = props.markers?.value ? (JSON.parse(props.markers.value) as CartesianMarkerProps[]) : [];
    } catch (e) {
        return <span>{"Error in Markers (JSON): " + e.message}</span>;
    }

    // Returning if no theme data
    if (props.themeType === "specify" && !props.theme?.value) {
        return <span>{"Error in Theme JSON Data: No theme data!"}</span>;
    }

    const getParsedLegends = (): LegendProps[] => {
        return JSON.parse(props.legends!.value!);
    };

    const getParsedTheme = (): TNivoTheme => {
        return JSON.parse(props.theme!.value!);
    };

    const getXScaleSpec = (): ScaleSpec => {
        if (props.xScaleSpecType === "linear") {
            return {
                type: "linear",
                min: props.xScaleSpecMinType === "auto" ? "auto" : props.xScaleSpecMinValue,
                max: props.xScaleSpecMaxType === "auto" ? "auto" : props.xScaleSpecMaxValue,
                stacked: props.xScaleSpecStacked,
                reverse: props.xScaleSpecReverse,
                clamp: props.xScaleSpecClamp,
                nice:
                    props.xScaleSpecNiceType === "true"
                        ? true
                        : props.xScaleSpecNiceType === "false"
                        ? false
                        : props.xScaleSpecNiceValue
            };
        }
        if (props.xScaleSpecType === "log") {
            return {
                type: "log",
                base: props.xScaleSpecBase,
                min: props.xScaleSpecMinType === "auto" ? "auto" : props.xScaleSpecMinValue,
                max: props.xScaleSpecMaxType === "auto" ? "auto" : props.xScaleSpecMaxValue
            };
        }
        if (props.xScaleSpecType === "symlog") {
            return {
                type: "symlog",
                constant: props.xScaleSpecConstant,
                min: props.xScaleSpecMinType === "auto" ? "auto" : props.xScaleSpecMinValue,
                max: props.xScaleSpecMaxType === "auto" ? "auto" : props.xScaleSpecMaxValue,
                reverse: props.xScaleSpecReverse
            };
        }
        if (props.xScaleSpecType === "point") {
            return { type: "point" };
        }
        if (props.xScaleSpecType === "band") {
            return {
                type: "band",
                round: props.xScaleSpecRound
            };
        }
        return {
            type: "time",
            format: props.xScaleSpecFormatType === "native" ? "native" : props.xScaleSpecFormatValue,
            precision: props.xScaleSpecPrecision,
            min: props.xScaleSpecTimeMinType === "auto" ? "auto" : props.xScaleSpecTimeMinValue,
            max: props.xScaleSpecTimeMaxType === "auto" ? "auto" : props.xScaleSpecTimeMaxValue,
            useUTC: props.xScaleSpecUseUTC,
            nice: props.xScaleSpecTimeNice
        };
    };

    const getYScaleSpec = (): ScaleSpec | undefined => {
        if (props.yScaleSpecType === "linear") {
            return {
                type: "linear",
                min: props.yScaleSpecMinType === "auto" ? "auto" : props.yScaleSpecMinValue,
                max: props.yScaleSpecMaxType === "auto" ? "auto" : props.yScaleSpecMaxValue,
                stacked: props.yScaleSpecStacked,
                reverse: props.yScaleSpecReverse,
                clamp: props.yScaleSpecClamp,
                nice:
                    props.yScaleSpecNiceType === "true"
                        ? true
                        : props.yScaleSpecNiceType === "false"
                        ? false
                        : props.yScaleSpecNiceValue
            };
        }
        if (props.yScaleSpecType === "log") {
            return {
                type: "log",
                base: props.yScaleSpecBase,
                min: props.yScaleSpecMinType === "auto" ? "auto" : props.yScaleSpecMinValue,
                max: props.yScaleSpecMaxType === "auto" ? "auto" : props.yScaleSpecMaxValue
            };
        }
        if (props.yScaleSpecType === "symlog") {
            return {
                type: "symlog",
                constant: props.yScaleSpecConstant,
                min: props.yScaleSpecMinType === "auto" ? "auto" : props.yScaleSpecMinValue,
                max: props.yScaleSpecMaxType === "auto" ? "auto" : props.yScaleSpecMaxValue,
                reverse: props.yScaleSpecReverse
            };
        }
        if (props.yScaleSpecType === "point") {
            return { type: "point" };
        }
        if (props.yScaleSpecType === "band") {
            return {
                type: "band",
                round: props.yScaleSpecRound
            };
        }
        return {
            type: "time",
            format: props.yScaleSpecFormatType === "native" ? "native" : props.yScaleSpecFormatValue,
            precision: props.yScaleSpecPrecision,
            min: props.yScaleSpecTimeMinType === "auto" ? "auto" : props.yScaleSpecTimeMinValue,
            max: props.yScaleSpecTimeMaxType === "auto" ? "auto" : props.yScaleSpecTimeMaxValue,
            useUTC: props.yScaleSpecUseUTC,
            nice: props.yScaleSpecTimeNice
        };
    };

    return (
        <NivoResponsiveLine
            data={parsedData}
            theme={props.themeType === "default" ? undefined : getParsedTheme()}
            markers={parsedMarkers}
            margin={{
                top: props.marginTop,
                right: props.marginRight,
                bottom: props.marginBottom,
                left: props.marginLeft
            }}
            xFormat={props.xScaleFormat.length === 0 ? undefined : props.xScaleFormat}
            yFormat={props.yScaleFormat.length === 0 ? undefined : props.yScaleFormat}
            useMesh={props.useMesh}
            enableCrosshair={props.enableCrosshair}
            enableTouchCrosshair={props.enableTouchCrosshair}
            enableGridX={props.enableGridX}
            enableGridY={props.enableGridY}
            enableSlices={props.enableSlices === "no" ? false : props.enableSlices}
            enablePointLabel={props.enablePointLabel}
            pointLabel={props.pointLabel?.value}
            pointLabelYOffset={parseInt(props.pointLabelYOffset, 10)}
            axisTop={
                props.enableAxisTop
                    ? {
                          tickSize: props.axisTopTickSize,
                          tickPadding: props.axisTopTickPadding,
                          tickRotation: props.axisTopTickRotation,
                          legend: props.axisTopLegend?.value,
                          legendOffset: props.axisTopLegendOffset,
                          legendPosition: props.axisTopLegendPosition,
                          truncateTickAt: props.axisTopTickTruncateAt
                      }
                    : null
            }
            axisRight={
                props.enableAxisRight
                    ? {
                          tickSize: props.axisRightTickSize,
                          tickPadding: props.axisRightTickPadding,
                          tickRotation: props.axisRightTickRotation,
                          legend: props.axisRightLegend?.value,
                          legendOffset: props.axisRightLegendOffset,
                          legendPosition: props.axisRightLegendPosition,
                          truncateTickAt: props.axisRightTickTruncateAt
                      }
                    : null
            }
            axisBottom={
                props.enableAxisBottom
                    ? {
                          tickSize: props.axisBottomTickSize,
                          tickPadding: props.axisBottomTickPadding,
                          tickRotation: props.axisBottomTickRotation,
                          legend: props.axisBottomLegend?.value,
                          legendOffset: props.axisBottomLegendOffset,
                          legendPosition: props.axisBottomLegendPosition,
                          truncateTickAt: props.axisBottomTickTruncateAt
                      }
                    : null
            }
            axisLeft={
                props.enableAxisLeft
                    ? {
                          tickSize: props.axisLeftTickSize,
                          tickPadding: props.axisLeftTickPadding,
                          tickRotation: props.axisLeftTickRotation,
                          legend: props.axisLeftLegend?.value,
                          legendOffset: props.axisLeftLegendOffset,
                          legendPosition: props.axisLeftLegendPosition,
                          truncateTickAt: props.axisLeftTickTruncateAt
                      }
                    : null
            }
            xScale={getXScaleSpec()}
            yScale={getYScaleSpec()}
            legends={
                props.legendsType === "default" ? undefined : props.legendsType === "no" ? null : getParsedLegends()
            }
            animate={props.animate}
        />
    );
}
