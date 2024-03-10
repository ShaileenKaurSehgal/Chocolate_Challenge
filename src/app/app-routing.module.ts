import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewChocolateComponent } from './components/overview-chocolate/overview-chocolate.component';
import { DetailsChocolateComponent } from './components/details-chocolate/details-chocolate.component';
import { HomeChocolateComponent } from './components/home-chocolate/home-chocolate.component';

// Handling Routing
const routes: Routes = [
  { path: '', component: HomeChocolateComponent },
  { path: 'overview', component: OverviewChocolateComponent },
  { path: 'details/:chocolateID', component: DetailsChocolateComponent },
  { path: '**', component: OverviewChocolateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
