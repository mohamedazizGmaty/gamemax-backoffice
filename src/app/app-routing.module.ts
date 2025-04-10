import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ShowPacksComponent } from './Packs/components/show-packs/show-packs.component';
const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'shop' , component:ShopComponent},
  {path:'subscription' , component:SubscriptionComponent},
   {path:'showPacks' , component:ShowPacksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
