import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {CourseService} from './course.service';
import {AuthorService} from './author.service';
import {AutoGrowDirective} from './auto-grow.directive'
import {TooltipComponent} from './tooltip.component'
import {RadioStylingComponent} from './radiostyling.component'
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, TooltipComponent, RadioStylingComponent],
  bootstrap:    [ AppComponent ],
  providers:    [CourseService, AuthorService],
})
export class AppModule { }
