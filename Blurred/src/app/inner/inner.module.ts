import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { ComponentComponent } from './component/component.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  imports: [
    CommonModule,
    InnerRoutingModule
  ],
  declarations: [ComponentComponent, MainContentComponent, PopUpComponent]
})
export class InnerModule { }
