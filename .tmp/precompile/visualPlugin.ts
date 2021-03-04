import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var monitoringKPI9536A6DA6E66497FB58724D898B681E0: IVisualPlugin = {
    name: 'monitoringKPI9536A6DA6E66497FB58724D898B681E0',
    displayName: 'monitoringKPII',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["monitoringKPI9536A6DA6E66497FB58724D898B681E0"] = monitoringKPI9536A6DA6E66497FB58724D898B681E0;
}

export default monitoringKPI9536A6DA6E66497FB58724D898B681E0;