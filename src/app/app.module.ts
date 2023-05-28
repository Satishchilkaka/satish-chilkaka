import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutMeComponent } from './profile/about-me/about-me.component';
import { HeaderComponent } from './profile/header/header.component';
import { FooterComponent } from './profile/footer/footer.component';
import { AboutComponent } from './profile/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutMeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
