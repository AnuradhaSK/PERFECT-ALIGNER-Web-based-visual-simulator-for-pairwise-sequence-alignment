import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
  MatCardModule, MatGridListModule, MatSelectModule, MatTableModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
      MatGridListModule, MatSelectModule, MatTableModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
      MatGridListModule, MatSelectModule,  MatTableModule]
})

export class MaterialModule { }

