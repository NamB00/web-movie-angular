import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './sharepage/header/header.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { WhatsonComponent } from './page/whatson/whatson.component';
import { ShortcodesComponent } from './page/shortcodes/shortcodes.component';
import { NewsComponent } from './page/news/news.component';
import { ContactComponent } from './page/contact/contact.component';
import { MovieListComponent } from './sharepage/movie-list/movie-list.component';
import { ComingSoonComponent } from './sharepage/coming-soon/coming-soon.component';
import { ContactInfoComponent } from './sharepage/contact-info/contact-info.component';
import { MenupageComponent } from './page/menupage/menupage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WhatsonComponent,
    ShortcodesComponent,
    NewsComponent,
    ContactComponent,
    MovieListComponent,
    ComingSoonComponent,
    ContactInfoComponent,
    MenupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
