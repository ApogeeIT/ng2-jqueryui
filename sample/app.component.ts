import { Component } from '@angular/core';

@Component({
    selector:'app',
    //templateUrl: './app.component.html'
    template: `
        <div>
            <h1>Sample</h1>

            <h2>ProgessBar</h2>
    
            Enabled: <input type="checkbox" [(ngModel)]="model.progressBarActive" name="progressBarActive" />
            Max: <input type="number" [(ngModel)]="model.progressBarMax" name="progressBarMax" />
            <br>
            <jqui-progressbar [uiValue]="model.value" [uiMax]="model.progressBarMax" [uiDisabled]="!model.progressBarActive"></jqui-progressbar>
            <br>
            Value: {{model.value}} - <input [(ngModel)]="model.value" type="text" />     

            <h2>Slider</h2>
            Enabled: <input type="checkbox" [(ngModel)]="model.sliderActive" name="sliderActive" />
            Min: <input type="number" [(ngModel)]="model.sliderMin" name="sliderMin" />
            Max: <input type="number" [(ngModel)]="model.sliderMax" name="sliderMax" />
            <br>
            <jqui-slider [(ngModel)]="model.value" [uiMin]="model.sliderMin" [uiMax]="model.sliderMax" [uiDisabled]="!model.sliderActive" [uiOrientation]="'horizontal'"></jqui-slider>
            <br>
            Value: {{model.value}} - <input [(ngModel)]="model.value" type="text" />
            
            <h2>DatePicker</h2>
            Enabled: <input type="checkbox" [(ngModel)]="model.datePickerActive" name="datePickerActive" />
            <br>
            uiMinDate
            <jqui-datepicker [(ngModel)]="model.date" [uiDateFormat]="'dd/mm/yy'" [uiDisabled]="datePickerActive" [uiMinDate]="-40" [uiMaxDate]="40" [uiShowWeek]="false"></jqui-datepicker> - 
            <jqui-datepicker [(ngModel)]="model.date" [uiDateFormat]="'dd/mm/yy'"></jqui-datepicker>
            <br>
            Date: {{model.date | date:'dd/MM/yyyy'}}            
        </div>
    `
})
export class AppComponent
{

    model = {
        value : 25,
        progressBarActive : true,
        progressBarMax : 100,
        sliderActive : true,
        sliderMax : 100,
        sliderMin : 0,
        datePickerActive : true,
        date : new Date()
    };

    constructor(){
    }
}