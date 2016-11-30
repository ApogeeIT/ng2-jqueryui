import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'jqui-progressbar[value]',
    template: '<div #progressbar></div>'
})
export class JquiProgressBarComponent implements OnInit, OnChanges {

    @ViewChild('progressbar') el: ElementRef;

    public ngOnChanges(changes: SimpleChanges): void {
        let p = $(this.el.nativeElement).progressbar('instance');
        if (p) {
            if (changes['value'] && !isNaN(changes['value'].currentValue)) {
                $(this.el.nativeElement).progressbar('option', 'value', +changes['value'].currentValue);
            } else {
                $(this.el.nativeElement).progressbar('option', 'value', 0);
            }
        }
    }

    @Input() value?: number;
    @Input() disabled: boolean;
    @Input() max: number;

    ngOnInit() {

        this.max = this.max || 100;
        this.disabled = this.disabled || false;

        $(this.el.nativeElement).progressbar({
            value: this.value || 0,
            max: this.max
        });
    }
}