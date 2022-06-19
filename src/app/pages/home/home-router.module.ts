import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content.component';
import { HomeComponent } from './home.component';
import { AboutContentComponent } from './about-content.component';
import { ContactComponent } from './contact.component';

const routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeContentComponent,
        data: { animation: 'home' },
      },
      {
        path: 'about',
        component: AboutContentComponent,
        data: { animation: 'about' },
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { animation: 'contact' },
      },
    ],
    component: HomeComponent,
    data: { animation: 'hue' },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouterModule {}
