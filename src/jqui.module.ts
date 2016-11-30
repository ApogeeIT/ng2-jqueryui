import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { JquiProgressBarComponent } from './components/progressbar/jqui-progressbar.component';
import { JquiSliderComponent } from './components/slider/jqui-slider.component';
import { JquiDatePickerComponent } from './components/datepicker/jqui.datepicker.component';


@NgModule({
    imports: [FormsModule],
    declarations : [JquiProgressBarComponent, JquiSliderComponent, JquiDatePickerComponent],
    exports:[JquiProgressBarComponent, JquiSliderComponent, JquiDatePickerComponent]
})
export class JquiModule { }