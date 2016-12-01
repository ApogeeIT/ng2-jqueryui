import { AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { IDisabledWidget, IMaxWidget } from '../../options/widget-options';
export declare class JquiProgressBarComponent implements IDisabledWidget, IMaxWidget, AfterViewInit, OnChanges {
    uiValue?: number;
    uiDisabled: boolean;
    uiMax: number;
    private el;
    private $el;
    private setOption(optionName, value);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
