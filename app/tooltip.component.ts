import {Component, Directive, Input} from '@angular/core';

@Component({
    selector:'[tooltip]',
    templateUrl: 'app/tooltip.component.html',
    styleUrls: ['app/tooltip.css'],
       host:{
        '(blur)': 'onBlur()',
        '(click)':'onClick()'
    },
})
export class TooltipComponent {
   @Input() textIn:string;

    tooltipText; 
  
    onBlur() {
        this.tooltipText='';
    }
    onClick() {
        this.tooltipText= this.textIn;
    }
}