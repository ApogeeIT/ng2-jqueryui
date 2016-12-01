import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';
import { IDisabledWidget } from '../../options/widget-options';
export declare class JquiDatePickerComponent implements IDisabledWidget, OnChanges, AfterViewInit, ControlValueAccessor {
    value?: any;
    uiDisabled: boolean;
    uiDateFormat: string;
    uiMaxDate: Date | number | string;
    uiMinDate: Date | number | string;
    uiShowWeek: boolean;
    private static defaultDateFormat;
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
