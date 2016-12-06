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
<div jqui-progressbar style="height:100px" [uiValue]="model.value" [uiMax]="model.progressBarMax"></div>

<jqui-slider name="myValue" [(ngModel)]="myValue" [uiMin]="0" [uiMax]="100" [uiDisabled]="false" [uiOrientation]="'horizontal'"></jqui-slider>

<jqui-datepicker [(ngModel)]="myDate" [uiDateFormat]="'dd/mm/yy'" [uiMinDate]="-40" [uiMaxDate]="40"></jqui-datepicker>
From <jqui-datepicker [(ngModel)]="model.dateFrom" [uiDateFormat]="'dd/mm/yy'" [uiMaxDate]="model.dateTo"></jqui-datepicker> 
to <jqui-datepicker [(ngModel)]="model.dateTo" [uiDateFormat]="'dd/mm/yy'" [uiMinDate]="model.dateFrom"></jqui-datepicker>

<jqui-accordeon [uiCollapsible]="true">
    <h3>Item 1</h3>
    <div>Content 1</div>
    <h3>Item 2</h3>
    <div>Content 2</div>
    <h3>Item 3</h3>
    <div>Content 3</div>
</jqui-accordeon>

<div jqui-accordeon [uiCollapsible]="true">
    <h3>Item 1</h3>
    <div>Content 1</div>
    <h3>Item 2</h3>
    <div>Content 2</div>
    <h3>Item 3</h3>
    <div>Content 3</div>
</div> 


<jqui-tabs>
    <jqui-tab-item [uiTabTitle]="'Item 1'">Content 1</jqui-tab-item>
    <jqui-tab-item [uiTabTitle]="'Item 2'">Content 2</jqui-tab-item>
</jqui-tabs>

<div jqui-tabs>
    <div jqui-tab-item [uiTabTitle]="'Item 1'">Content 1</div>
    <div jqui-tab-item [uiTabTitle]="'Item 2'">Content 2</div>
</div>
```