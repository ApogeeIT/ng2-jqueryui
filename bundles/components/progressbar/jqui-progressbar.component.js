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
    JquiProgressBarComponent.prototype.ngOnChanges = function (changes) {
        var p = $(this.el.nativeElement).progressbar('instance');
        if (p) {
            if (changes['value'] && !isNaN(changes['value'].currentValue)) {
                $(this.el.nativeElement).progressbar('option', 'value', +changes['value'].currentValue);
            }
            else {
                $(this.el.nativeElement).progressbar('option', 'value', 0);
            }
        }
    };
    JquiProgressBarComponent.prototype.ngOnInit = function () {
        this.max = this.max || 100;
        this.disabled = this.disabled || false;
        $(this.el.nativeElement).progressbar({
            value: this.value || 0,
            max: this.max
        });
    };
    __decorate([
        core_1.ViewChild('progressbar'), 
        __metadata('design:type', core_1.ElementRef)
    ], JquiProgressBarComponent.prototype, "el", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiProgressBarComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiProgressBarComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], JquiProgressBarComponent.prototype, "max", void 0);
    JquiProgressBarComponent = __decorate([
        core_1.Component({
            selector: 'jqui-progressbar[value]',
            template: '<div #progressbar></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], JquiProgressBarComponent);
    return JquiProgressBarComponent;
}());
exports.JquiProgressBarComponent = JquiProgressBarComponent;
//# sourceMappingURL=jqui-progressbar.component.js.map