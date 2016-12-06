import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { JquiProgressBarComponent } from './components/progressbar/jqui-progressbar.component';
//import { JquiInternalProgressBarComponent } from './components/progressbar/jqui-internal-progressbar.component';
import { JquiSliderComponent } from './components/slider/jqui-slider.component';
import { JquiDatePickerComponent } from './components/datepicker/jqui.datepicker.component';
import { JquiAccordionComponent} from './components/accordion/jqui-accordion.component';
import { JquiTabComponent} from './components/tab/jqui-tab.component';
import { JquiTabItemComponent} from './components/tab/jqui-tab-item.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        JquiProgressBarComponent, 
        JquiSliderComponent, 
        JquiDatePickerComponent,  
        JquiAccordionComponent,
        JquiTabComponent, JquiTabItemComponent
    ],
    exports: [
        JquiProgressBarComponent, 
        JquiSliderComponent, 
        JquiDatePickerComponent,  
        JquiAccordionComponent,
        JquiTabComponent, JquiTabItemComponent
    ]
})
export class JquiModule { }