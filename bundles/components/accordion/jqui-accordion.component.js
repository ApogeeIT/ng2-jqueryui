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
var JquiAccordionComponent = (function () {
    function JquiAccordionComponent(el) {
        this.el = el;
    }
    JquiAccordionComponent.prototype.ngAfterViewInit = function () {
        this.$el = $(this.el.nativeElement).accordion({
            collapsible: this.uiCollapsible,
            disabled: this.uiDisabled
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiAccordionComponent.prototype, "uiDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiAccordionComponent.prototype, "uiCollapsible", void 0);
    JquiAccordionComponent = __decorate([
        core_1.Component({
            selector: 'div[jqui-accordeon],jqui-accordeon',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], JquiAccordionComponent);
    return JquiAccordionComponent;
}());
exports.JquiAccordionComponent = JquiAccordionComponent;
//# sourceMappingURL=jqui-accordion.component.js.map