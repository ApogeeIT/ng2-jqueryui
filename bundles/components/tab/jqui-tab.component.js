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
var jqui_tab_item_component_1 = require('./jqui-tab-item.component');
var JquiTabComponent = (function () {
    function JquiTabComponent(el) {
        this.el = el;
    }
    JquiTabComponent.prototype.ngAfterViewInit = function () {
        this.$el = $(this.el.nativeElement).tabs({
            collapsible: this.uiCollapsible,
            disabled: this.uiDisabled
        });
    };
    JquiTabComponent.prototype.ngAfterContentInit = function () {
        var items = this.items.toArray();
        for (var i = 0; i < items.length; i++) {
            items[i].uiTabIndex = i;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiTabComponent.prototype, "uiDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiTabComponent.prototype, "uiCollapsible", void 0);
    __decorate([
        core_1.ContentChildren(jqui_tab_item_component_1.JquiTabItemComponent), 
        __metadata('design:type', core_1.QueryList)
    ], JquiTabComponent.prototype, "items", void 0);
    JquiTabComponent = __decorate([
        core_1.Component({
            selector: 'div[jqui-tabs],jqui-tabs',
            template: "\n        <ul>\n            <li *ngFor=\"let item of items\">\n                <a [href]=\"'#tab-' + item.uiTabIndex\">{{item.uiTabTitle}}</a>\n            </li>\n        </ul>\n        <ng-content></ng-content>\n        ",
            styles: [':host{display:block}']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], JquiTabComponent);
    return JquiTabComponent;
}());
exports.JquiTabComponent = JquiTabComponent;
//# sourceMappingURL=jqui-tab.component.js.map