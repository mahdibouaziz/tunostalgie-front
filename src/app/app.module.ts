import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home/home.component';
import { CategoryComponent } from './home/category/category.component';
import { ArticlesComponent } from './home/articles/articles.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ArticlesComponent,
    FeedbackComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
