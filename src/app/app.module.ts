import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderDefaultComponent } from './headers/header-default/header-default.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderHomeComponent } from './headers/header-home/header-home.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowPacksComponent } from './Packs/components/show-packs/show-packs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDefaultComponent,
    FooterComponent,
    HeaderHomeComponent,
    HomeComponent,
    ShopComponent,
    SubscriptionComponent,
    ShowPacksComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
