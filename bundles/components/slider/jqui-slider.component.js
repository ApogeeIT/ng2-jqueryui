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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var JquiSliderComponent = (function () {
    function JquiSliderComponent(cd) {
        this.onChange = function (_) { };
        cd.valueAccessor = this;
    }
    JquiSliderComponent.prototype.writeValue = function (value) {
        if ($(this.el.nativeElement).slider('instance')) {
            if (value && !isNaN(value)) {
                $(this.el.nativeElement).slider('option', 'value', +value);
            }
            else {
                $(this.el.nativeElement).slider('option', 'value', 0);
            }
        }
    };
    JquiSliderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JquiSliderComponent.prototype.registerOnTouched = function (fn) {
        //this.onTouched = fn;
    };
    JquiSliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.max = this.max || 100;
        this.min = this.min || 0;
        this.disabled = this.disabled || false;
        $(this.el.nativeElement).slider({
            value: this.value || 0,
            max: this.max,
            min: this.min,
            slide: function (event, ui) {
                _this.onChange(ui.value);
            }
        });
    };
    __decorate([
        core_1.ViewChild('slider'), 
        __metadata('design:type', core_1.ElementRef)
    ], JquiSliderComponent.prototype, "el", void 0);
    __decorate([
        core_1.Input('ngModel'), 
        __metadata('design:type', Number)
    ], JquiSliderComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiSliderComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiSliderComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiSliderComponent.prototype, "min", void 0);
    JquiSliderComponent = __decorate([
        core_1.Component({
            selector: 'jqui-slider[ngModel]',
            template: '<div #slider></div>'
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [forms_1.NgModel])
    ], JquiSliderComponent);
    return JquiSliderComponent;
}());
exports.JquiSliderComponent = JquiSliderComponent;
//# sourceMappingURL=jqui-slider.component.js.map