import { ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import * as WidgetOptions from '../../options/widget-options';
export declare class JquiTabComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.ICollapsibleWidget, AfterViewInit, AfterContentInit {
    private el;
    uiDisabled: boolean;
    uiCollapsible: boolean;
    private $el;
    private items;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
}
