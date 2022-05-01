import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
<<<<<<< HEAD
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import {MenuModule} from 'primeng/menu';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, CenterComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, InputTextModule, TabMenuModule,MenuModule,  MessageModule],
=======
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, InputTextModule],
>>>>>>> 382c80650274cb3f19c989f89885197af0d0ed57
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
