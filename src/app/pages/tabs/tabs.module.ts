import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tabs.router.module';
import { ChangeRouteGuard } from './change-route.guard';
import { ChangeRouteService } from './change-route.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage
  ],
  providers: [
    ChangeRouteGuard,
    ChangeRouteService,
  ]
})
export class TabsPageModule { }
