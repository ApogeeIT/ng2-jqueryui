import { OnInit, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';
export declare class JquiDatePickerComponent implements AfterViewInit, ControlValueAccessor, OnInit {
    private static defaultDateFormat;
    private el;
    private $el;
    onChange: any;
    constructor(cd: NgModel);
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    value?: any;
    disabled: boolean;
    uiDateFormat: string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
