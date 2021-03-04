import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class CircleSettings {
    criticalOpen: string;
    majorOpen: string;
    criticalAcknowledged: string;
    majorAcknowledged: string;
    CornerRadius: number;
    FontValueSize: number;
    FontValueColor: string;
    fontFamily: string;
    CompanyFontSize: number;
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
