import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlockComponent } from './block/block.component';
import { Block2Component } from './block2/block2.component';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockComponent,
    Block2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    AppComponent,
    HomeComponent,
    BlockComponent,
    Block2Component,

  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
