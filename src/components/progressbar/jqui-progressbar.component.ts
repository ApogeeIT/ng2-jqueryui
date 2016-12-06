import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

import * as WidgetOptions from '../../options/widget-options';

@Component({
    selector: 'div[jqui-progressbar][uiValue],jqui-progressbar[uiValue]',
    template: '<ng-content></ng-content>',
    styles:[':host{display:block}']
})
export class JquiProgressBarComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.IMaxWidget, AfterViewInit, OnChanges {

    @Input() uiValue?: number;
    @Input() uiDisabled: boolean;
    @Input() uiMax: number;

    private $el: JQuery;

    constructor(private el: ElementRef) {
    }

    private setOption(optionName: string, value: any): void {
        this.$el.progressbar('option', optionName, value);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.$el) {

            if (changes['uiValue']) {
                if (!isNaN(changes['uiValue'].currentValue)) {
                    this.setOption('value', +changes['uiValue'].currentValue);
                } else {
                    this.setOption('value', 0);
                }
            }

            if (changes['uiDisabled']) {
                this.setOption('disabled', changes['uiDisabled'].currentValue);
            }

            if (changes['uiMax']) {
                if (!isNaN(changes['uiMax'].currentValue) && +changes['uiMax'].currentValue > 0) {
                    this.setOption('max', +changes['uiMax'].currentValue);
                }
            }
        }
    }

    ngAfterViewInit() {

        this.uiMax = this.uiMax || 100;

        this.$el = $(this.el.nativeElement).progressbar({
            value: this.uiValue || 0,
            max: this.uiMax
            // disabled: true
        })

        if (this.uiDisabled) {
            this.setOption('disabled', true);
        }
    }
}