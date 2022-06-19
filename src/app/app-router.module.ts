import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './test/test.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JobsPageComponent } from './pages/jobs/jobs-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    data: { animation: 'papa' },
    // pathMatch: 'full',
  },

  {
    path: 'jobs',
    component: JobsComponent,
    children: [
      {
        path: 'a/:id',
        component: JobsPageComponent,
        data: { animation: 'a' },
      },
      {
        path: 'b/:id',
        component: JobsPageComponent,
        data: { animation: 'b' },
      },
      {
        path: '**',
        redirectTo: 'a/0',
      },
    ],
    data: { animation: 'papa' },
  },
  // {
  //   path: 'test1',
  //   component: TestComponent,
  //   data: { animation: 'test1' },
  // },

  // {
  //   path: 'test2',
  //   component: TestComponent,
  //   data: { animation: 'test2' },
  // },

  {
    path: '**',
    redirectTo: 'home',
  },

  // {
  //   path: '',
  //   redirectTo: 'home',
  // },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRouterModule {}
