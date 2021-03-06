import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureToggleModule } from '@course-platform/shared/util/util-feature-toggle';

@NgModule({
	declarations: [],
	imports: [CommonModule, FeatureToggleModule],
	exports: [FeatureToggleModule],
	providers: [],
})
export class SharedModule {}
