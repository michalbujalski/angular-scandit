import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanditSdkModule } from 'scandit-sdk-angular';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScanditSdkModule.forRoot(environment.scanditLicense, {
          engineLocation: 'assets/',
          preloadBlurryRecognition: false,
          preloadEngine: false
      })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
