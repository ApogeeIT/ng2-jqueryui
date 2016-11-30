import { OnInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class JquiProgressBarComponent implements OnInit, OnChanges {
    el: ElementRef;
    ngOnChanges(changes: SimpleChanges): void;
    value?: number;
    disabled: boolean;
    max: number;
    ngOnInit(): void;
}
