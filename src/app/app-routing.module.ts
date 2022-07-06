import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { MenupageComponent } from './page/menupage/menupage.component';
import { NewsComponent } from './page/news/news.component';
import { ShortcodesComponent } from './page/shortcodes/shortcodes.component';
import { WhatsonComponent } from './page/whatson/whatson.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'menu/:id', component:MenupageComponent},
  {path: 'whatson', component:WhatsonComponent},
  {path: 'shortcodes', component:ShortcodesComponent},
  {path: 'news', component:NewsComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
