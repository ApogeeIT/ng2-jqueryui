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
var JquiProgressBarComponent = (function () {
    function JquiProgressBarComponent() {
    }
    JquiProgressBarComponent.prototype.setOption = function (optionName, value) {
        this.$el.progressbar('option', optionName, value);
    };
    JquiProgressBarComponent.prototype.ngOnChanges = function (changes) {
        if (this.$el) {
            if (changes['uiValue']) {
                if (!isNaN(changes['uiValue'].currentValue)) {
                    this.setOption('value', +changes['uiValue'].currentValue);
                }
                else {
                    this.setOption('value', 0);
                }
            }
            if (changes['uiDisabled']) {
                this.setOption('disabled', changes['uiDisabled'].currentValue);
            }
            if (changes['uiMax']) {
                if (!isNaN(changes['uiMax'].currentValue) && +changes['uiMax'].currentValue > 0) {
                    this.setOption('max', +changes['uiMax'].currentValue);
                }
            }
        }
    };
    JquiProgressBarComponent.prototype.ngAfterViewInit = function () {
        this.uiMax = this.uiMax || 100;
        this.$el = $(this.el.nativeElement).progressbar({
            value: this.uiValue || 0,
            max: this.uiMax
        });
        if (this.uiDisabled) {
            this.setOption('disabled', true);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiProgressBarComponent.prototype, "uiValue", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiProgressBarComponent.prototype, "uiDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiProgressBarComponent.prototype, "uiMax", void 0);
    __decorate([
        core_1.ViewChild('progressbar'), 
        __metadata('design:type', core_1.ElementRef)
    ], JquiProgressBarComponent.prototype, "el", void 0);
    JquiProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'jqui-progressbar[uiValue]',
            template: '<div #progressbar></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], JquiProgressBarComponent);
    return JquiProgressBarComponent;
}());
exports.JquiProgressBarComponent = JquiProgressBarComponent;
//# sourceMappingURL=jqui-progressbar.component.js.map