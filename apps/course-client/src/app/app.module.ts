import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureToggleService } from '@course-platform/shared/util/util-feature-toggle';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
//import { RouterModule } from '@angular/router';


export function preloadFeatureFlags(
	featureToggleService: FeatureToggleService,
) {
	return () => {
		return featureToggleService.getFeatureFlags().toPromise();
	};
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		//RouterModule,
		AppRoutingModule,
		HttpClientModule,
		HomeModule,
	],
	providers: [
		{
			provide: APP_INITIALIZER,
			multi: true,
			useFactory: preloadFeatureFlags,
			deps: [FeatureToggleService],
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
