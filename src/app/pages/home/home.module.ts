import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact.component';
import { AboutContentComponent } from './about-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ContactComponent, AboutContentComponent],
  imports: [CommonModule, SharedModule, HomeRouterModule, ReactiveFormsModule],
  exports: [HomeRouterModule],
})
export class HomeModule {}
