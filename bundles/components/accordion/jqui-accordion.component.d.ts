import { ElementRef, AfterViewInit } from '@angular/core';
import * as WidgetOptions from '../../options/widget-options';
export declare class JquiAccordionComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.ICollapsibleWidget, AfterViewInit {
    private el;
    uiDisabled: boolean;
    uiCollapsible: boolean;
    private $el;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
}
