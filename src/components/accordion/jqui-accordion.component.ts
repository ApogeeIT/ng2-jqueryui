import { Component, Input, ElementRef, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';

import * as WidgetOptions from '../../options/widget-options';

@Component({
    selector: 'div[jqui-accordeon],jqui-accordeon',
    template: '<ng-content></ng-content>'
})
export class JquiAccordionComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.ICollapsibleWidget, AfterViewInit {

    @Input() uiDisabled: boolean;
    @Input() uiCollapsible: boolean;

    private $el: JQuery;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        this.$el = $(this.el.nativeElement).accordion({
            collapsible: this.uiCollapsible,
            disabled: this.uiDisabled
        });
    }
}