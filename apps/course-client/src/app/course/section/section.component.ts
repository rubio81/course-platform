import { Component, Input, OnInit } from '@angular/core';
import { CourseSection } from '@course-platform/shared/interfaces';

@Component({
  selector: 'course-platform-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  
  @Input() section: CourseSection;
  constructor() { }

  ngOnInit() {
  }

}
