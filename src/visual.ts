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
import { textMeasurementService } from "powerbi-visuals-utils-formattingutils";

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


    private textValue5: Selection<SVGElement>;


    private orgName: Selection<SVGElement>;



    private textMajorOpen: Selection<SVGElement>;
    private textMajorAcknowledged : Selection<SVGElement>;

    private textCriticalAcknowledged : Selection<SVGElement>;
    private textCriticaOpen: Selection<SVGElement>;
    private logo: Selection<SVGImageElement>;


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

        this.logo = this.container.append('image').classed('logo',true)

        

        




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

        this.textValue5 = this.container.append("text")
            .classed("textLabel2", true);

        this.textMajorOpen = this.container.append('text').classed('mjrOpen',true)
        this.textMajorAcknowledged = this.container.append('text').classed('mjrAck',true)

        this.textCriticaOpen = this.container.append('text').classed('critOpn',true)

        this.textCriticalAcknowledged = this.container.append('text').classed('critAck1', true)


        

        this.orgName = this.container.append("text").classed("orgName",true)

        // this.textEventMonitor.append("text").classed("textValue", true);
        
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstanceEnumeration {
        const settings: VisualSettings = this.visualSettings || <VisualSettings>VisualSettings.getDefault();
        return VisualSettings.enumerateObjectInstances(settings, options);
    }

    public update(options: VisualUpdateOptions) {


        let dataView1: DataView = options.dataViews[0];
        let categoricalDataView: DataViewCategorical = dataView1.categorical


        





        

        //console.log("categorical values: ", categoricalDataView.categories[0].values.indexOf("PQR"),categoricalDataView.categories[0].values.indexOf("Tauw"))
        // let dataView2: DataView= options.dataViews[1];

        let values: DataViewValueColumnGroup[] = categoricalDataView.values.grouped();

        let filterValue = values.values().next().value.values[4].values[0]

        console.log("Filter Value", filterValue)


        let indexOfFilterValue = categoricalDataView.categories[0].values.indexOf(filterValue)

        // console.log("categorical values: ", categoricalDataView.categories[0].values[indexOfFilterValue])

        let values1: DataViewValueColumnGroup[] = categoricalDataView.values.grouped();

        // console.log("categorical values: ", values1[indexOfFilterValue])


        // let values = options.dataViews.forEach((el)=>{return el.single.value})
        // let dataView3: DataView = options.dataViews[2];
        // let dataView4: DataView = options.dataViews[3];

        // this.visualSettings.colors.circleThickness = Math.max(0, this.visualSettings.circle.circleThickness);
        // this.visualSettings.circle.circleThickness = Math.min(10, this.visualSettings.circle.circleThickness);

        console.log("Check values", values1[indexOfFilterValue].values[0].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString())

        let _criticalOpen = values1[indexOfFilterValue].values[0].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString()

        console.log("Check values", values1[indexOfFilterValue].values[1].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString())
        let _majorOpen = values1[indexOfFilterValue].values[1].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString()
        
        console.log("Check values", values1[indexOfFilterValue].values[2].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString())
        let _criticalAck = values1[indexOfFilterValue].values[2].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString()

        console.log("Check values", values1[indexOfFilterValue].values[3].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString())

        let _majorAck = values1[indexOfFilterValue].values[3].values.reduce((a,b)=>{return Number(a)+Number(b)},0).toString()

        this.visualSettings = VisualSettings.parse<VisualSettings>(dataView1);
        let parmeterH = options.viewport.height/4
        let parmeterW = options.viewport.width/8


        let width: number = options.viewport.width - parmeterW;
        let height: number = options.viewport.height  - parmeterH;

        this.svg.attr("width", options.viewport.width);
        this.svg.attr("height", options.viewport.height);
        
        this.box1.attr("width", width/2 )
        .attr("height",height/2)
        .attr("x", parmeterW/3)
        .attr("y", 3*parmeterH/4)
        .attr("rx",this.visualSettings.circle.cornerRadius)
        .attr("ry",this.visualSettings.circle.cornerRadius)
        .style("fill",this.visualSettings.circle.criticalOpen).style("fill-opacity","1")

        let titleLengthCriticalOpen = textMeasurementService.measureSvgTextWidth( {text: "Critical Open",fontFamily: this.visualSettings.circle.fontFamily.toString(), fontSize: this.visualSettings.circle.fontValueSize.toString()})

        this.textCriticaOpen.text("Critical Open")
        .attr("x", parmeterW/3 + width/4 - titleLengthCriticalOpen*1.2)
        .attr("y", 3*parmeterH/4 + 50)
        .style("font-size", this.visualSettings.circle.fontValueSize)
        .style("fill", this.visualSettings.circle.fontValueColor)
        .style("font-family", this.visualSettings.circle.fontFamily)

        this.box2.attr("width", width/2 )
        .attr("height",height/2)
        .attr("x",width/2 + 2*parmeterW/3)
        .attr("y",3*parmeterH/4)
        .attr("rx",this.visualSettings.circle.cornerRadius)
        .attr("ry",this.visualSettings.circle.cornerRadius)
        .style("fill",this.visualSettings.circle.majorOpen).style("fill-opacity","1")


        let titleLengthMajorOpen = textMeasurementService.measureSvgTextWidth( {text: "Major Open",fontFamily: this.visualSettings.circle.fontFamily.toString(), fontSize: this.visualSettings.circle.fontValueSize.toString()})

        this.textMajorOpen.text("Major Open")
        .attr("x", width/2 + 2*parmeterW/3 + width/4 - titleLengthMajorOpen*1.2)
        .attr("y", 3*parmeterH/4 + 50)
        .style("font-size", this.visualSettings.circle.fontValueSize)
        .style("fill", this.visualSettings.circle.fontValueColor)
        .style("font-family", this.visualSettings.circle.fontFamily)




        this.box3.attr("width", width/2  )
        .attr("height",height/2 )
        .attr("x",parmeterW/3)
        .attr("y",height/2 + 2*parmeterH/3+parmeterH/4)
        .attr("rx",this.visualSettings.circle.cornerRadius)
        .attr("ry",this.visualSettings.circle.cornerRadius)
        .style("fill",this.visualSettings.circle.criticalAcknowledged).style("fill-opacity","1")



        let titleCitiicalAcknowliiged = textMeasurementService.measureSvgTextWidth( {text: "Critical Acknowledged",fontFamily: this.visualSettings.circle.fontFamily.toString(), fontSize: this.visualSettings.circle.fontValueSize.toString()})

        this.textCriticalAcknowledged.text("Critical Acknowledged")
        .attr("x", parmeterW/3 + width/4 - titleCitiicalAcknowliiged*1.2)
        .attr("y",height/2 + 2*parmeterH/3+parmeterH/4 + 50) 
        .style("font-size", this.visualSettings.circle.fontValueSize)
        .style("fill", this.visualSettings.circle.fontValueColor)
        .style("font-family", this.visualSettings.circle.fontFamily)
        



        this.box4.attr("width", width/2 )
        .attr("height",height/2)
        .attr("x",width/2 + 2*parmeterW/3)
        .attr("y",height/2 + 2*parmeterH/3+parmeterH/4)
        .attr("rx",this.visualSettings.circle.cornerRadius)
        .attr("ry",this.visualSettings.circle.cornerRadius)
        .style("fill",this.visualSettings.circle.majorAcknowledged).style("fill-opacity","1")


        let titleMajorAcknowleged = textMeasurementService.measureSvgTextWidth( {text: "Major Acknowledged",fontFamily: this.visualSettings.circle.fontFamily.toString(), fontSize: this.visualSettings.circle.fontValueSize.toString()})

        this.textMajorAcknowledged.text("Major Acknowledged")
        .attr("x",width/2 + 2*parmeterW/3 + width/4 - titleMajorAcknowleged*1.2)
        .attr("y",height/2 + 2*parmeterH/3+parmeterH/4 + 50)
        .style("font-size", this.visualSettings.circle.fontValueSize)
        .style("fill", this.visualSettings.circle.fontValueColor)
        .style("font-family", this.visualSettings.circle.fontFamily)

        let fontSizeValue: number = this.visualSettings.circle.fontValueSize;
        //   Math.min(width, height) / 5;


        

       
        
        this.textValue1
            .text(_criticalOpen)

            // .text(<string>Math.round(Number(dataView1.categorical.values[0].values.reduce((a,b)=>{return Number(a)+Number(b)}))).toString())
            .attr("x", parmeterW/3 + width/4 )
            .attr("y", 5*parmeterH/8 + height/4 + parmeterH/4)
            .attr("text-anchor","middle")
            .attr("dominant-baseline", "middle")
            .style("font-size", this.visualSettings.circle.fontValueSize * 2)
            .style("fill", this.visualSettings.circle.fontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)
            
        this.textValue2
            .text(_majorOpen)
            // .text(<string>dataView1.categorical.values[1].values.reduce((a,b)=>{return Number(a)+Number(b)}).toString())
            .attr("x", 2*parmeterW/3 + 3/4*width )
            .attr("y",  5*parmeterH/8 + height/4+ parmeterH/4)
            .attr("text-anchor","middle")
            .attr("dominant-baseline", "middle")
            .style("font-size",this.visualSettings.circle.fontValueSize * 2)
            .style("fill", this.visualSettings.circle.fontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)

        this.textValue3
            .text(_criticalAck)
            // .text(<string>dataView1.categorical.values[2].values.reduce((a,b)=>{return Number(a)+Number(b)}).toString())
            .attr("x", parmeterW/3 + width/4)
            .attr("text-anchor","middle")
            .attr("dominant-baseline", "middle")
            .attr("y", 3*height/4  + 6*parmeterH/8 + parmeterH/4)
            .style("font-size", this.visualSettings.circle.fontValueSize * 2)
            .style("fill", this.visualSettings.circle.fontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)

        this.textValue4
            .text(_majorAck)
            // .text(<string>Math.round(Number(dataView1.categorical.values[3].values.reduce((a,b)=>{return Number(a)+Number(b)}))).toString())
            .attr("x",2*parmeterW/3 + 3/4*width )
            .attr("text-anchor","middle")
            .attr("dominant-baseline", "middle")
            .attr("y", 3*height/4  + 6*parmeterH/8+ parmeterH/4)
            .style("font-size", this.visualSettings.circle.fontValueSize * 2)
            .style("fill", this.visualSettings.circle.fontValueColor)
            .style("font-family", this.visualSettings.circle.fontFamily)
        

        this.orgName
        .text(filterValue)
        // .text(categoricalDataView.categories[0].values[0].toString())
        .attr("x", "50%")
        .attr("y",parmeterH/2 + parmeterH/4 - parmeterH/8)
        .attr("text-anchor","middle")
        .attr("font-size",this.visualSettings.circle.companyFontSize *2)
        .style("fill", this.visualSettings.circle.fontValueColor)



        this.logo
        .attr("x", 0)
        .attr("y",0)
        .attr("width",options.viewport.width/3)
        .attr('height', parmeterH/2)
        .attr("href","https://ubuntu16blob.blob.core.windows.net/testhtml/PQR 3250x1500 (1).jpg")
        
        this.textValue5.text("Event monitor")
        .attr("x",options.viewport.width/2 + 70)
        .attr("y", parmeterH/2 -25)
        .style("fill","#F76969")
        .style("font-size", 42)
        

            
            }
            
        
}