import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlockComponent } from './block/block.component';
import { ButtonComponent } from './button/button.component';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    AppComponent,
    HomeComponent,
    BlockComponent,
    ButtonComponent,

  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
