import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class CircleSettings {
    openBackgroundColor: string;
    ClosedBackgroundColor: string;
    AcknBackgroundColor: string;
    CriticalBackgroundColor: string;
    CornerRadius: number;
    FontValueSize: number;
    FontValueColor: string;
    fontFamily: string;
}
export declare class VisualSettings extends DataViewObjectsParser {
    dataPoint: dataPointSettings;
    circle: CircleSettings;
}
export declare class dataPointSettings {
    defaultColor: string;
    showAllDataPoints: boolean;
    fill: string;
    fillRule: string;
    fontSize: number;
}
