import { Component, Input, Self, ViewChild, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

import { IDisabledWidget } from '../../options/widget-options';

@Component({
    selector: 'jqui-datepicker[ngModel]',
    template: '<input type="text" #datepicker />'
})
export class JquiDatePickerComponent implements IDisabledWidget, OnChanges, AfterViewInit, ControlValueAccessor {

    @Input('ngModel') value?: any;
    @Input() uiDisabled: boolean;
    @Input() uiDateFormat: string = JquiDatePickerComponent.defaultDateFormat;

    private static defaultDateFormat = 'dd/mm/yy'; 

    @ViewChild('datepicker') private el: ElementRef;
    private $el:JQuery;

    public onChange:any = (_: any) => {};

    public constructor(@Self() cd:NgModel) {
        cd.valueAccessor = this;
    }

    private setOption(optionName: string, value:any):void {
        this.$el.datepicker('option', optionName, value);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.$el) {

            if (changes['uiDisabled']) {
                this.setOption('disabled', changes['uiDisabled'].currentValue);
            }
        }
    }

    public writeValue(value:any):void {
        if(this.$el) {
            if(value) {
                this.$el.datepicker('setDate', value);
            } else {
                this.$el.datepicker('setDate', null);
            }            
        }
    }

    public registerOnChange(fn:(_:any) => {}):void {
        this.onChange = fn;
    }

    public registerOnTouched(fn:() => {}):void {
       //this.onTouched = fn;
    }

    ngAfterViewInit() {

        this.$el = $(this.el.nativeElement).datepicker({
            dateFormat: this.uiDateFormat,
            onSelect : (date:string) => {
                this.onChange($.datepicker.parseDate(this.uiDateFormat, date));
            }
            
        }).on('change', () => {
            let date:Date = null;
            try{
                date = $.datepicker.parseDate(this.uiDateFormat, this.el.nativeElement.value)
            } catch (e) { }
            
            if(date) {
                this.onChange(date);
            } else {
                this.el.nativeElement.value = '';
                this.onChange(null);
            }
        });

        if(this.uiDisabled) {
            this.setOption('disabled', true);
        }
    }
}