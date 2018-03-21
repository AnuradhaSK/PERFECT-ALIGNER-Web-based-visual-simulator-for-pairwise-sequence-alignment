import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
  MatCardModule, MatGridListModule, MatSelectModule, MatPaginatorModule, MatTableModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
    MatGridListModule, MatSelectModule, MatPaginatorModule, MatTableModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
    MatGridListModule, MatSelectModule, MatPaginatorModule, MatTableModule]
})

export class MaterialModule {
}

