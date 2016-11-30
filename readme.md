# jQuery UI components for Angular 2

```typescript
import { UiModule } from 'ng2-jqueryui/jqui';

@NgModule({
    imports: [jquiModule]
})
export class AppModule { }
```

```html
<jqui-progressbar [value]="myValue"></jqui-progressbar>

<jqui-slider name="myValue" [(ngModel)]="myValue"></jqui-slider>

<jqui-datepicker [(ngModel)]="myDate" [uiDateFormat]="'dd/mm/yy'"></jqui-datepicker> 
```