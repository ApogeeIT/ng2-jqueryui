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
            <jqui-progressbar style="height:100px" [uiValue]="model.value" [uiMax]="model.progressBarMax" [uiDisabled]="!model.progressBarActive"></jqui-progressbar>
            <br>
            <div jqui-progressbar style="height:100px" [uiValue]="model.value" [uiMax]="model.progressBarMax"></div>
            <br>
            Value: {{model.value}} - <input [(ngModel)]="model.value" type="text" />     

            <h2>Slider</h2>
            Enabled: <input type="checkbox" [(ngModel)]="model.sliderActive" name="sliderActive" />
            Min: <input type="number" [(ngModel)]="model.sliderMin" name="sliderMin" />
            Max: <input type="number" [(ngModel)]="model.sliderMax" name="sliderMax" />
            <br>
            <jqui-slider name="s1" [(ngModel)]="model.value" [uiMin]="model.sliderMin" [uiMax]="model.sliderMax" [uiDisabled]="!model.sliderActive" [uiOrientation]="'horizontal'"></jqui-slider>
            <br>
            Value: {{model.value}} - <input [(ngModel)]="model.value" type="text" />
            
            <h2>DatePicker</h2>
            Enabled: <input type="checkbox" [(ngModel)]="model.datePickerActive" name="datePickerActive" />
            <br>
            <jqui-datepicker [(ngModel)]="model.date" [uiDateFormat]="'dd/mm/yy'" [uiDisabled]="datePickerActive" [uiMinDate]="-40" [uiMaxDate]="40" [uiShowWeek]="false"></jqui-datepicker> - 
            <jqui-datepicker [(ngModel)]="model.date" [uiDateFormat]="'dd/mm/yy'"></jqui-datepicker>
            <br>
            Date: {{model.date | date:'dd/MM/yyyy'}}         
            <br>
            From <jqui-datepicker [(ngModel)]="model.dateFrom" [uiDateFormat]="'dd/mm/yy'" [uiMaxDate]="model.dateTo"></jqui-datepicker> 
            to <jqui-datepicker [(ngModel)]="model.dateTo" [uiDateFormat]="'dd/mm/yy'" [uiMinDate]="model.dateFrom"></jqui-datepicker>

            <h2>Accordion</h2>
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

            <h2>Tab</h2>
            <jqui-tabs>
                <jqui-tab-item [uiTabTitle]="'Item 1'">Content 1</jqui-tab-item>
                <jqui-tab-item [uiTabTitle]="'Item 2'">Content 2</jqui-tab-item>
            </jqui-tabs>
            <hr>
            <div jqui-tabs>
                <div jqui-tab-item [uiTabTitle]="'Item 1'">Content 1</div>
                <div jqui-tab-item [uiTabTitle]="'Item 2'">Content 2</div>
            </div>
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
        date : new Date(),
        dateFrom : new Date(2016, 10, 15),
        dateTo : new Date(2016, 11, 15)
    };

    constructor(){
    }
}