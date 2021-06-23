import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerItemComponent } from 'src/components/bannerItem/banner-item.component';
import { BlueBannerComponent } from 'src/components/blueBanner/blue-banner.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { OptimizationsComponent } from 'src/components/optimization-viewer/optimizations.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueBannerComponent,
    BannerItemComponent,
    OptimizationsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
