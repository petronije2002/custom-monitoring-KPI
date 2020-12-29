/*
*  Power BI Visual CLI
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
"use strict";

import "core-js/stable";
import "./../style/visual.less";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import VisualObjectInstance = powerbi.VisualObjectInstance;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;

import IVisualHost = powerbi.extensibility.IVisualHost;
import DataView = powerbi.DataView;

import DataViewCategorical = powerbi.DataViewCategorical;
import DataViewDataViewCategoricalSingle = powerbi.DataViewCategorical;
import DataViewValueColumnGroup = powerbi.DataViewValueColumnGroup;
import PrimitiveValue = powerbi.PrimitiveValue;

import { VisualSettings } from "./settings";
import VisualObjectInstanceEnumeration = powerbi.VisualObjectInstanceEnumeration;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;

import * as d3 from "d3";
type Selection<T extends d3.BaseType> = d3.Selection<T, any,any, any>;


export class Visual implements IVisual {

    public visualSettings: VisualSettings;


    private host: IVisualHost;
    private svg: Selection<SVGElement>;
    private container: Selection<SVGElement>;

    private textValue1: Selection<SVGElement>;
    private textLabel1: Selection<SVGElement>;

    private textValue2: Selection<SVGElement>;
    private textLabel2: Selection<SVGElement>;

    private textValue3: Selection<SVGElement>;
    private textLabel3: Selection<SVGElement>;

    private textValue4: Selection<SVGElement>;
    private textLabel4: Selection<SVGElement>;

    private textValueOpen: Selection<SVGElement>;
    private textValueAckn: Selection<SVGElement>;


    private box1: Selection<SVGElement>;
    private box2: Selection<SVGElement>;
    private box3: Selection<SVGElement>;
    private box4: Selection<SVGElement>;



    constructor(options: VisualConstructorOptions) {

        this.svg = d3.select(options.element)
            .append('svg')
            .classed('circleCard', true);

        this.container = this.svg.append("g")
            .classed('container', true);
        
        this.box1 = this.container.append("rect").classed('boxed',true)
        this.box2 = this.container.append("rect").classed('boxed',true)
        this.box3 = this.container.append("rect").classed('boxed',true)
        this.box4 = this.container.append("rect").classed('boxed',true)


        this.box1.append('text').classed('textValue',true)


        // this.textValueOpen = this.container.append("text")
        //     .classed("textValue", true);
        // this.textValueAckn= this.container.append("text")
        //     .classed("textValue", true);

        this.textValue1 = this.container.append("text")
            .classed("textValue", true);
        this.textLabel1 = this.container.append("text")
            .classed("textLabel", true);
        
        this.textValue2 = this.container.append("text")
            .classed("textValue2", true);
        this.textLabel2 = this.container.append("text")
            .classed("textLabel2", true);

        this.textValue3= this.container.append("text")
            .classed("textValue2", true);
        this.textLabel3 = this.container.append("text")
            .classed("textLabel2", true);

        this.textValue4= this.container.append("text")
            .classed("textValue2", true);
        this.textLabel4 = this.container.append("text")
            .classed("textLabel2", true);
        
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
        const settings: VisualSettings = this.visualSettings || <VisualSettings>VisualSettings.getDefault();
        return VisualSettings.enumerateObjectInstances(settings, options);
    }

    public update(options: VisualUpdateOptions) {


        let dataView1: DataView = options.dataViews[0];
        let categoricalDataView: DataViewCategorical = dataView1.categorical
        // let dataView2: DataView= options.dataViews[1];

        let values: DataViewValueColumnGroup[] = categoricalDataView.values.grouped();
        // let values = options.dataViews.forEach((el)=>{return el.single.value})
        // let dataView3: DataView = options.dataViews[2];
        // let dataView4: DataView = options.dataViews[3];

        // this.visualSettings.colors.circleThickness = Math.max(0, this.visualSettings.circle.circleThickness);
        // this.visualSettings.circle.circleThickness = Math.min(10, this.visualSettings.circle.circleThickness);


        this.visualSettings = VisualSettings.parse<VisualSettings>(dataView1);


        let width: number = options.viewport.width;
        let height: number = options.viewport.height;
        this.svg.attr("width", width);
        this.svg.attr("height", height);
        
        this.box1.attr("width", (width -30)/2 )
        .attr("height",(height -30)/2)
        .attr("x",10).attr("y",10)
        .attr("rx",this.visualSettings.circle.CornerRadius)
        .attr("ry",this.visualSettings.circle.CornerRadius)
        .style("fill",this.visualSettings.circle.openBackgroundColor).style("fill-opacity","1")

        this.box2.attr("width", (width -30)/2 )
        .attr("height",(height -30)/2)
        .attr("x",10 +(width -30)/2 +10).attr("y",10)
        .attr("rx",this.visualSettings.circle.CornerRadius)
        .attr("ry",this.visualSettings.circle.CornerRadius)
        .style("fill",this.visualSettings.circle.ClosedBackgroundColor).style("fill-opacity","1")

        this.box3.attr("width", (width -30)/2 )
        .attr("height",(height -30)/2)
        .attr("x",10).attr("y",10+(height-30)/2 +10)
        .attr("rx",this.visualSettings.circle.CornerRadius)
        .attr("ry",this.visualSettings.circle.CornerRadius)
        .style("fill",this.visualSettings.circle.AcknBackgroundColor).style("fill-opacity","1")

        this.box4.attr("width", (width -30)/2 )
        .attr("height",(height -30)/2)
        .attr("x",10 +(width -30)/2 +10).attr("y",10+(height-30)/2 +10)
        .attr("rx",this.visualSettings.circle.CornerRadius)
        .attr("ry",this.visualSettings.circle.CornerRadius)
        .style("fill",this.visualSettings.circle.CriticalBackgroundColor).style("fill-opacity","1")

        let fontSizeValue: number = this.visualSettings.circle.FontValueSize;
        //   Math.min(width, height) / 5;

       
        
        this.textValue1
            .text(<string>Math.round(Number(dataView1.categorical.values[0].values.reduce((a,b)=>{return Number(a)+Number(b)}))).toString())
            .attr("x", (10 +(width -30)/2)/2 +"px")
            .attr("y", ((height -30)/2)/2 + this.visualSettings.circle.FontValueSize/2 +"px")
            .attr("text-anchor", "middle")
            .style("font-size", this.visualSettings.circle.FontValueSize)
            .style("fill", this.visualSettings.circle.FontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)

        // this.textLabel1
        //     .text("Open")
        //     .attr("x", 20 +"px")
        //     .attr("y",10  + "px")
        //     .attr("dy", fontSizeValue / 1.1)
        //     .style("writing-mode", "tb")
        //     .style("glyph-orientation-vertical", "90")
        //     .style("fill", "white")
        //     .style("font-size", fontSizeLabel*2 + "px");
        
        // this.textLabel2
        //     .text("Ackn")
        //     .attr("x", 20 +"px")
        //     .attr("y",10 + 10+ (height-30)/2 + "px")
        //     .attr("dy", fontSizeValue / 1.1)
        //     .style("writing-mode", "tb")
        //     .style("glyph-orientation-vertical", "90")
        //     .style("fill", "white")
        //     .style("font-size", fontSizeLabel*2 + "px");
            
        this.textValue2
            .text(<string>dataView1.categorical.values[1].values.reduce((a,b)=>{return Number(a)+Number(b)}).toString())
            .attr("x", 10 + (width -30)/2+  (width -30)/4+ 10 +"px")
            .attr("y", ((height -30)/2)/2 + this.visualSettings.circle.FontValueSize/2 +"px")
            .attr("text-anchor", "middle")
            .style("font-size",this.visualSettings.circle.FontValueSize)
            .style("fill", this.visualSettings.circle.FontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)

        this.textValue3
            .text(<string>dataView1.categorical.values[2].values.reduce((a,b)=>{return Number(a)+Number(b)}).toString())
            .attr("x", (10 +(width -30)/2)/2 +"px")
            .attr("y", (height -30)/2 + 10 + (height -30)/4 +this.visualSettings.circle.FontValueSize/2+ "px")
            .attr("text-anchor", "middle")
            .style("font-size", this.visualSettings.circle.FontValueSize)
            .style("fill", this.visualSettings.circle.FontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)

        this.textValue4
            .text(<string>Math.round(Number(dataView1.categorical.values[3].values.reduce((a,b)=>{return Number(a)+Number(b)}))).toString())
            .attr("x", 10 + (width -30)/2+  (width -30)/4+ 10 +"px")
            .attr("y",  (height -30)/2 + 10 + (height -30)/4 + this.visualSettings.circle.FontValueSize/2+ "px")
            .attr("text-anchor", "middle")
            .style("font-size", this.visualSettings.circle.FontValueSize)
            .style("fill", this.visualSettings.circle.FontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)
            
            }
            
        
        
        
        
        

    
}