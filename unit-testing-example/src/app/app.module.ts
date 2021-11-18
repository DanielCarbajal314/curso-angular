import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RemoveAllHtmlPipe } from './remove-all-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RemoveAllHtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
