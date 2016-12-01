import { Component, Input, Self, ViewChild, ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

import { IDisabledWidget, IMaxWidget, IMinWidget, IOrientationWidget } from '../../options/widget-options';

@Component({
    selector: 'jqui-slider[ngModel]',
    template: '<div #slider></div>'
})
export class JquiSliderComponent implements IDisabledWidget, IMaxWidget, IMinWidget, IOrientationWidget, OnChanges, AfterViewInit, ControlValueAccessor {

    @Input('ngModel') value?: number;
    @Input() uiDisabled: boolean;
    @Input() uiMax: number = 100;
    @Input() uiMin: number = 0;
    @Input() uiOrientation: 'vertical' | 'horizontal' = 'horizontal';

    @ViewChild('slider') private el: ElementRef;
    private $el: JQuery;

    public onChange: any = (_: any) => { };

    public constructor( @Self() cd: NgModel) {
        cd.valueAccessor = this;
    }

    private setOption(optionName: string, value: any): void {
        this.$el.slider('option', optionName, value);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.$el) {

            if (changes['uiDisabled']) {
                this.setOption('disabled', changes['uiDisabled'].currentValue);
            }

            if (changes['uiMax']) {
                if (!isNaN(changes['uiMax'].currentValue)) {
                    this.setOption('max', +changes['uiMax'].currentValue);
                }
            }

            if (changes['uiMin']) {
                if (!isNaN(changes['uiMin'].currentValue)) {
                    this.setOption('min', +changes['uiMin'].currentValue);
                }
            }
        }
    }

    public writeValue(value: any): void {
        if (this.$el) {
            if (value && !isNaN(value)) {
                this.setOption('value', +value);
            } else {
                this.setOption('value', 0);
            }
        }
    }

    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        //this.onTouched = fn;
    }

    ngAfterViewInit() {

        this.$el = $(this.el.nativeElement).slider({
            value: this.value || 0,
            max: this.uiMax,
            min: this.uiMin,
            disabled: this.uiDisabled,
            orientation: this.uiOrientation,
            slide: (event, ui) => {
                this.onChange(ui.value);
            }
        });
    }
}