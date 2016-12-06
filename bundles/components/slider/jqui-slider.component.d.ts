import { AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';
import * as WidgetOptions from '../../options/widget-options';
export declare class JquiSliderComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.IMaxWidget, WidgetOptions.IMinWidget, WidgetOptions.IOrientationWidget, OnChanges, AfterViewInit, ControlValueAccessor {
    value?: number;
    uiDisabled: boolean;
    uiMax: number;
    uiMin: number;
    uiOrientation: 'vertical' | 'horizontal';
    private el;
    private $el;
    onChange: any;
    constructor(cd: NgModel);
    private setOption(optionName, value);
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngAfterViewInit(): void;
}
