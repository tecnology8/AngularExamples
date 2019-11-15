import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {UpperCapitalPipe} from './hello/upper-capital.pipe';
import {LoggerService} from './logger.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UpperCapitalPipe ],
  providers:    [LoggerService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
