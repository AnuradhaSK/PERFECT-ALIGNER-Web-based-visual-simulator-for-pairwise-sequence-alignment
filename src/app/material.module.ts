import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule,
  MatCardModule, MatGridListModule, MatSelectModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
      MatGridListModule, MatSelectModule],
    exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
      MatGridListModule, MatSelectModule]
})

export class MaterialModule{ }

