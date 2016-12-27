import {Component, Directive} from '@angular/core';

@Component({
    selector:'[tooltip]',
    template: `<div id="tooltip" class="glyphicon glyphicon-question-sign">
    <span class="tooltiptext">{{tooltipText}}</span>
    </div>`,
    styleUrls: ['app/tooltip.css'],
       host:{
        '(blur)': 'onBlur()',
        '(click)':'onClick()'
    }
})
export class TooltipComponent {
    tooltipText;
  
    onBlur() {
        this.tooltipText='';
    }
    onClick() {
        this.tooltipText='onClicktttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt';
    }
}