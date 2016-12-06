import { Component, Input, ElementRef, AfterViewInit, SimpleChanges, OnChanges, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

import * as WidgetOptions from '../../options/widget-options';

import { JquiTabItemComponent } from './jqui-tab-item.component';

@Component({
    selector: 'div[jqui-tabs],jqui-tabs',
    template: `
        <ul>
            <li *ngFor="let item of items">
                <a [href]="'#tab-' + item.uiTabIndex">{{item.uiTabTitle}}</a>
            </li>
        </ul>
        <ng-content></ng-content>
        `,
    styles:[':host{display:block}']
})
export class JquiTabComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.ICollapsibleWidget, AfterViewInit, AfterContentInit {

    @Input() uiDisabled: boolean;
    @Input() uiCollapsible: boolean;

    private $el: JQuery;

    @ContentChildren(JquiTabItemComponent) 
    private items: QueryList<JquiTabItemComponent>;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        this.$el = $(this.el.nativeElement).tabs({
            collapsible: this.uiCollapsible,
            disabled: this.uiDisabled
        });
    }

    ngAfterContentInit() {
        let items = this.items.toArray();
        for(let i = 0; i< items.length; i++) {
            items[i].uiTabIndex = i;
        }
    }
}
