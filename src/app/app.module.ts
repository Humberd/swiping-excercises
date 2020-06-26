import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';


@NgModule({
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap{
  ngDoBootstrap(appRef: ApplicationRef): void {
    console.log('bootstraping');
  }
}
