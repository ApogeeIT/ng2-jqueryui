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
var JquiDatePickerComponent = (function () {
    function JquiDatePickerComponent(cd) {
        this.uiDateFormat = JquiDatePickerComponent.defaultDateFormat;
        this.uiShowWeek = false;
        this.onChange = function (_) { };
        cd.valueAccessor = this;
    }
    JquiDatePickerComponent.prototype.setOption = function (optionName, value) {
        this.$el.datepicker('option', optionName, value);
    };
    JquiDatePickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.$el) {
            if (changes['uiDisabled']) {
                this.setOption('disabled', changes['uiDisabled'].currentValue);
            }
            if (changes['uiMinDate']) {
                console.log(changes['uiMinDate'].currentValue);
                this.setOption('minDate', changes['uiMinDate'].currentValue);
            }
            if (changes['uiMaxDate']) {
                console.log(changes['uiMaxDate'].currentValue);
                this.setOption('maxDate', changes['uiMaxDate'].currentValue);
            }
        }
    };
    JquiDatePickerComponent.prototype.writeValue = function (value) {
        if (this.$el) {
            if (value) {
                this.$el.datepicker('setDate', value);
            }
            else {
                this.$el.datepicker('setDate', null);
            }
        }
    };
    JquiDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JquiDatePickerComponent.prototype.registerOnTouched = function (fn) {
        //this.onTouched = fn;
    };
    JquiDatePickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$el = $(this.el.nativeElement).datepicker({
            dateFormat: this.uiDateFormat,
            maxDate: this.uiMaxDate,
            minDate: this.uiMinDate,
            showWeek: this.uiShowWeek,
            onSelect: function (date) {
                _this.onChange($.datepicker.parseDate(_this.uiDateFormat, date));
            }
        }).on('change', function () {
            var date = null;
            try {
                date = $.datepicker.parseDate(_this.uiDateFormat, _this.el.nativeElement.value);
            }
            catch (e) { }
            if (date) {
                _this.onChange(date);
            }
            else {
                _this.el.nativeElement.value = '';
                _this.onChange(null);
            }
        });
        if (this.uiDisabled) {
            this.setOption('disabled', true);
        }
    };
    JquiDatePickerComponent.defaultDateFormat = 'dd/mm/yy';
    __decorate([
        core_1.Input('ngModel'), 
        __metadata('design:type', Object)
    ], JquiDatePickerComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiDatePickerComponent.prototype, "uiDisabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], JquiDatePickerComponent.prototype, "uiDateFormat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], JquiDatePickerComponent.prototype, "uiMaxDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], JquiDatePickerComponent.prototype, "uiMinDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], JquiDatePickerComponent.prototype, "uiShowWeek", void 0);
    __decorate([
        core_1.ViewChild('datepicker'), 
        __metadata('design:type', core_1.ElementRef)
    ], JquiDatePickerComponent.prototype, "el", void 0);
    JquiDatePickerComponent = __decorate([
        core_1.Component({
            selector: 'jqui-datepicker[ngModel]',
            template: '<input type="text" #datepicker />'
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [forms_1.NgModel])
    ], JquiDatePickerComponent);
    return JquiDatePickerComponent;
}());
exports.JquiDatePickerComponent = JquiDatePickerComponent;
//# sourceMappingURL=jqui.datepicker.component.js.map