import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCard9536A6DA6E66497FB58724D898B681E0_DEBUG: IVisualPlugin = {
    name: 'circleCard9536A6DA6E66497FB58724D898B681E0_DEBUG',
    displayName: 'CircleCard',
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
    powerbi.visuals.plugins["circleCard9536A6DA6E66497FB58724D898B681E0_DEBUG"] = circleCard9536A6DA6E66497FB58724D898B681E0_DEBUG;
}

export default circleCard9536A6DA6E66497FB58724D898B681E0_DEBUG;