import { AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';
import { IDisabledWidget, IMaxWidget, IMinWidget, IOrientationWidget } from '../../options/widget-options';
export declare class JquiSliderComponent implements IDisabledWidget, IMaxWidget, IMinWidget, IOrientationWidget, OnChanges, AfterViewInit, ControlValueAccessor {
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
