import { ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';
export declare class JquiSliderComponent implements AfterViewInit, ControlValueAccessor {
    el: ElementRef;
    onChange: any;
    constructor(cd: NgModel);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    value?: number;
    disabled: boolean;
    max: number;
    min: number;
    ngAfterViewInit(): void;
}
