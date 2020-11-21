import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import{ RouterModule } from '@angular/router';
import {CourseModule} from '../course/course.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CourseModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
