import { Component } from '@angular/core';

@Component({
    selector:'app',
    //templateUrl: './app.component.html'
    template: `
        <div>
            <h1>Sample</h1>

            <h2>Progess Bar</h2>
    
            <jqui-progressbar [value]="model.value"></jqui-progressbar>
            <br>
            Value: {{model.value}} - <input [(ngModel)]="model.value" type="text" />     

            <h2>Slider</h2>

            <jqui-slider [(ngModel)]="model.value"></jqui-slider>
            <br>
            Value: {{model.value}} - <input [(ngModel)]="model.value" type="text" />
            
            <h2>Date Picker</h2>

            <jqui-datepicker [(ngModel)]="model.date" [uiDateFormat]="'dd/mm/yy'"></jqui-datepicker> - <jqui-datepicker [(ngModel)]="model.date" [uiDateFormat]="'dd/mm/yy'"></jqui-datepicker>
            <br>
            Date: {{model.date | date:'dd/MM/yyyy'}}            
        </div>
    `
})
export class AppComponent
{

    model = {
        value : 25,
        date : new Date()
    };

    constructor(){
    }
}