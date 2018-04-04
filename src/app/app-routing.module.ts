import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampViewComponent } from './camp-view/camp-view.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path: '', redirectTo: '/banner', pathMatch: 'full' },
  {path: 'def', component: DefaultComponent },
  {path: 'campaigns', component: CampaignsComponent},
  {path: 'camp-view', component: CampViewComponent},
  {path: 'test', component: TestComponent},
  {path: 'test/:id', component: TestComponent},
  {path: 'test2', component: Test2Component},
  {path: 'test3', component: Test3Component},
  {path: 'banner', component: BannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
