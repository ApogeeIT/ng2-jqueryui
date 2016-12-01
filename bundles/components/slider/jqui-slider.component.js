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
        this.uiMax = 100;
        this.uiMin = 0;
        this.uiOrientation = 'horizontal';
        this.onChange = function (_) { };
        cd.valueAccessor = this;
    }
    JquiSliderComponent.prototype.setOption = function (optionName, value) {
        this.$el.slider('option', optionName, value);
    };
    JquiSliderComponent.prototype.ngOnChanges = function (changes) {
        if (this.$el) {
            if (changes['uiDisabled']) {
                this.setOption('disabled', changes['uiDisabled'].currentValue);
            }
            if (changes['uiMax']) {
                if (!isNaN(changes['uiMax'].currentValue)) {
                    this.setOption('max', +changes['uiMax'].currentValue);
                }
            }
            if (changes['uiMin']) {
                if (!isNaN(changes['uiMin'].currentValue)) {
                    this.setOption('min', +changes['uiMin'].currentValue);
                }
            }
        }
    };
    JquiSliderComponent.prototype.writeValue = function (value) {
        if (this.$el) {
            if (value && !isNaN(value)) {
                this.setOption('value', +value);
            }
            else {
                this.setOption('value', 0);
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
        this.$el = $(this.el.nativeElement).slider({
            value: this.value || 0,
            max: this.uiMax,
            min: this.uiMin,
            disabled: this.uiDisabled,
            orientation: this.uiOrientation,
            slide: function (event, ui) {
                _this.onChange(ui.value);
            }
        });
    };
    __decorate([
        core_1.Input('ngModel'), 
        __metadata('design:type', Number)
    ], JquiSliderComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiSliderComponent.prototype, "uiDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiSliderComponent.prototype, "uiMax", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiSliderComponent.prototype, "uiMin", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], JquiSliderComponent.prototype, "uiOrientation", void 0);
    __decorate([
        core_1.ViewChild('slider'), 
        __metadata('design:type', core_1.ElementRef)
    ], JquiSliderComponent.prototype, "el", void 0);
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