import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThataTimerService } from './thata-timer.service';
import { ThataHomeComponent } from './thata-home/thata-home.component';
import { ThataHistoryComponent } from './thata-history/thata-history.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(
    [
      { path: '', component: ThataHomeComponent },
      { path: 'thatahistory', component: ThataHistoryComponent },
    ]) ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, ThataHistoryComponent, ThataHomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ThataTimerService]
})
export class AppModule { }
