# jQuery UI components for Angular 2

## Pre alpha version !!

```typescript
import { JquiModule } from 'ng2-jqueryui/jqui';

@NgModule({
    imports: [JquiModule]
})
export class AppModule { }
```

```html
<jqui-progressbar [uiValue]="myValue" [uiMax]="100" [uiDisabled]="false"></jqui-progressbar>

<jqui-slider name="myValue" [(ngModel)]="myValue" [uiMin]="0" [uiMax]="100" [uiDisabled]="false" [uiOrientation]="'horizontal'"></jqui-slider>

<jqui-datepicker [(ngModel)]="myDate" [uiDateFormat]="'dd/mm/yy'" [uiMinDate]="-40" [uiMaxDate]="40"></jqui-datepicker> 
```