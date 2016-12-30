import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const demoRoutes: Routes = [
  // {
  //   path: 'demo',
  //   children: [
  //     {
  //       path: 'template',
  //       component: TemplateFormComponent
  //     },
  //     {
  //       path: 'reactive',
  //       component: ReactiveFormComponent
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/demo/template',
  //       pathMatch: 'full'
  //     }
  //   ]
  // }

  { path: 'template', component: TemplateFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'reactive', redirectTo: '/demo/template' }
];

@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule { }