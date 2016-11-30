import { Component, Input, Self, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
    selector: 'jqui-slider[ngModel]',
    template: '<div #slider></div>'
})
export class JquiSliderComponent implements AfterViewInit, ControlValueAccessor {

    @ViewChild('slider') el: ElementRef;

    public onChange:any = (_: any) => {};

    public constructor(@Self() cd:NgModel) {
        cd.valueAccessor = this;
    }

    public writeValue(value:any):void {
        if($(this.el.nativeElement).slider('instance')) {
            if(value && !isNaN(value)) {
                $(this.el.nativeElement).slider('option', 'value', +value);
            } else {
                $(this.el.nativeElement).slider('option', 'value', 0);
            }   
        }
    }

    public registerOnChange(fn:(_:any) => {}):void {
        this.onChange = fn;
    }

    public registerOnTouched(fn:() => {}):void {
       //this.onTouched = fn;
    }

    @Input('ngModel') value?: number;
    @Input() disabled: boolean;
    @Input() max: number;
    @Input() min: number;



    ngAfterViewInit() {
        this.max = this.max || 100;
        this.min = this.min || 0;
        this.disabled = this.disabled || false;

        $(this.el.nativeElement).slider({
           value: this.value || 0,
            max: this.max,
            min: this.min,
            slide: (event,  ui) => {
                this.onChange(ui.value);
            }
        });
    }
}