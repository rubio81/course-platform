import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app.routing'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    //RouterModule,
    AppRoutingModule, 
    HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
