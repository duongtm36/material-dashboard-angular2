import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NoDataComponent } from './no-data/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ConfirmDialogComponent,
    NoDataComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ConfirmDialogComponent,
    NoDataComponent
  ]
})
export class ComponentsModule { }
