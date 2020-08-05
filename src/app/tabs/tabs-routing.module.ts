import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const HomePageUrl = `/tabs/tab1`;

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage
  },
  {
    path: '',
    redirectTo: HomePageUrl,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
