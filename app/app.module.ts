import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {CourseService} from './course.service';
import {AuthorService} from './author.service';
import {AutoGrowDirective} from './auto-grow.directive'
import {TooltipComponent} from './tooltip.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CoursesComponent, AuthorsComponent, AutoGrowDirective, TooltipComponent],
  bootstrap:    [ AppComponent ],
  providers:    [CourseService, AuthorService],
})
export class AppModule { }
