
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StrongPasswordModule } from '../strong-password/strong-password.module';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    StrongPasswordModule
  ],
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent
  ]
})
export class DemoModule { }
