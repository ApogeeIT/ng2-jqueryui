import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

import { IDisabledWidget, IMaxWidget } from '../../options/widget-options';


@Component({
    selector: 'jqui-progressbar[uiValue]',
    template: '<div #progressbar></div>'
})
export class JquiProgressBarComponent implements IDisabledWidget, IMaxWidget, AfterViewInit, OnChanges {

    @Input() uiValue?: number;
    @Input() uiDisabled: boolean;
    @Input() uiMax: number;

    @ViewChild('progressbar') private el: ElementRef;
    private $el: JQuery;

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