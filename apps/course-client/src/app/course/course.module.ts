import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course.routing';
import { SectionComponent } from './section/section.component';


@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  declarations: [CourseComponent, SectionComponent]
})
export class CourseModule { }
