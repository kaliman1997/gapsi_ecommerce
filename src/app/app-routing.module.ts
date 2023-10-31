import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { ProvidersComponent } from './providersList/providers.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'providersList', component: ProvidersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
