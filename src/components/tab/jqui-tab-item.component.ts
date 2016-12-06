import { Component, Input } from '@angular/core';

@Component({
    selector: 'div[jqui-tab-item],jqui-tab-item',
    template: `<ng-content></ng-content>`,
    host: { '[id]': "'tab-'+ uiTabIndex" }
})
export class JquiTabItemComponent {

    @Input() uiTabTitle: string;
    @Input() uiTabIndex: number;
};