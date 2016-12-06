"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var jqui_progressbar_component_1 = require('./components/progressbar/jqui-progressbar.component');
//import { JquiInternalProgressBarComponent } from './components/progressbar/jqui-internal-progressbar.component';
var jqui_slider_component_1 = require('./components/slider/jqui-slider.component');
var jqui_datepicker_component_1 = require('./components/datepicker/jqui.datepicker.component');
var jqui_accordion_component_1 = require('./components/accordion/jqui-accordion.component');
var jqui_tab_component_1 = require('./components/tab/jqui-tab.component');
var jqui_tab_item_component_1 = require('./components/tab/jqui-tab-item.component');
var JquiModule = (function () {
    function JquiModule() {
    }
    JquiModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            declarations: [
                jqui_progressbar_component_1.JquiProgressBarComponent,
                jqui_slider_component_1.JquiSliderComponent,
                jqui_datepicker_component_1.JquiDatePickerComponent,
                jqui_accordion_component_1.JquiAccordionComponent,
                jqui_tab_component_1.JquiTabComponent, jqui_tab_item_component_1.JquiTabItemComponent
            ],
            exports: [
                jqui_progressbar_component_1.JquiProgressBarComponent,
                jqui_slider_component_1.JquiSliderComponent,
                jqui_datepicker_component_1.JquiDatePickerComponent,
                jqui_accordion_component_1.JquiAccordionComponent,
                jqui_tab_component_1.JquiTabComponent, jqui_tab_item_component_1.JquiTabItemComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], JquiModule);
    return JquiModule;
}());
exports.JquiModule = JquiModule;
//# sourceMappingURL=jqui.module.js.map