import { Component, Input } from '@angular/core';

import * as WidgetOptions from '../../options/widget-options';

@Component({
    selector: 'jqui-progressbar[uiValue]',
    template: '<div jqui-progressbar [uiValue]="uiValue" [uiMax]="uiMax" [uiDisabled]="uiDisabled"><ng-content></ng-content></div>'
})
export class JquiProgressBarComponent implements WidgetOptions.IDisabledWidget, WidgetOptions.IMaxWidget {

    @Input() uiValue?: number;
    @Input() uiDisabled: boolean;
    @Input() uiMax: number;

}