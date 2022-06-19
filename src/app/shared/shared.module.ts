import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { AvailableToWorkColorPipe } from './pipes/available-to-work.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, AvailableToWorkColorPipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, AvailableToWorkColorPipe],
})
export class SharedModule {}
