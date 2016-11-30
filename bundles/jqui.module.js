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
var jqui_progressbar_component_1 = require('./components/progressbar/jqui-progressbar.component');
var jqui_slider_component_1 = require('./components/slider/jqui-slider.component');
var jqui_datepicker_component_1 = require('./components/datepicker/jqui.datepicker.component');
var JquiModule = (function () {
    function JquiModule() {
    }
    JquiModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule],
            declarations: [jqui_progressbar_component_1.JquiProgressBarComponent, jqui_slider_component_1.JquiSliderComponent, jqui_datepicker_component_1.JquiDatePickerComponent],
            exports: [jqui_progressbar_component_1.JquiProgressBarComponent, jqui_slider_component_1.JquiSliderComponent, jqui_datepicker_component_1.JquiDatePickerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], JquiModule);
    return JquiModule;
}());
exports.JquiModule = JquiModule;
//# sourceMappingURL=jqui.module.js.map