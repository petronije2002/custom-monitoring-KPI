import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class CircleSettings {
    criticalOpen: string;
    majorOpen: string;
    criticalAcknowledged: string;
    majorAcknowledged: string;
    cornerRadius: number;
    fontValueSize: number;
    fontValueColor: string;
    fontFamily: string;
    companyFontSize: number;
}
export declare class GeneralSettings {
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
