import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampViewComponent } from './camp-view/camp-view.component';
import { Test3Component } from './test/test3.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path: '', redirectTo: '/banner', pathMatch: 'full' },
  {path: 'def', component: DefaultComponent },
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'camp-view', component: CampViewComponent},
  {path: 'test3', component: Test3Component},
  {path: 'banner', component: BannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
