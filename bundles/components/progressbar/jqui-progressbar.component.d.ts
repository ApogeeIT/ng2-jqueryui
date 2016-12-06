import { AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as WidgetOptions from '../../options/widget-options';
export declare class JquiProgressBarComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.IMaxWidget, AfterViewInit, OnChanges {
    private el;
    uiValue?: number;
    uiDisabled: boolean;
    uiMax: number;
    private $el;
    constructor(el: ElementRef);
    private setOption(optionName, value);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
