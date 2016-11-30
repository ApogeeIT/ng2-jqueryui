import { Component, Input, Self, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
    selector: 'jqui-datepicker[ngModel]',
    template: '<input type="text" #datepicker />'
})
export class JquiDatePickerComponent implements AfterViewInit, ControlValueAccessor, OnInit {

    private static defaultDateFormat = 'dd/mm/yy'; 

    @ViewChild('datepicker') private el: ElementRef;
    private $el:JQuery;

    public onChange:any = (_: any) => {};

    public constructor(@Self() cd:NgModel) {
        cd.valueAccessor = this;
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

    @Input('ngModel') value?: any;
    @Input() disabled: boolean;
    @Input() uiDateFormat: string;

    ngOnInit(){
        
    }

    ngAfterViewInit() {

        this.disabled = this.disabled || false;
        this.uiDateFormat = this.uiDateFormat || JquiDatePickerComponent.defaultDateFormat;

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
    }
}