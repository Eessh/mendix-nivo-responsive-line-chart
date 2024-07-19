import { ReactElement, createElement } from "react";
// import { NivoLineChartPreviewProps } from "../typings/NivoLineChartProps";

export function preview(): ReactElement {
    return <span>Nivo Responsive Line Chart</span>;
}

export function getPreviewCss(): string {
    return require("./ui/NivoLineChart.css");
}
