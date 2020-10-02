import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routing module
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServiceComponent } from './Pages/service/service.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { HeaderComponent } from './Pages/common/header/header.component';
import { FooterComponent } from './Pages/common/footer/footer.component';
// services
import { LoadMainServiceService }  from './load-main-service.service';
import { PageHeaderComponent } from './Pages/common/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ LoadMainServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
