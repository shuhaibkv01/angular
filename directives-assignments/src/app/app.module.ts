import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDeatilsComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
