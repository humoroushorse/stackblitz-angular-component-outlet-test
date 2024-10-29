import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DATA_TOKEN, SomeData } from '../app.component';
import { CommonModule } from '@angular/common';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-foobar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatChipsModule,
    MatCardModule,
  ],
  templateUrl: './foobar.component.html',
  styleUrl: './foobar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoobarComponent {
  readonly data: SomeData = inject(DATA_TOKEN);

  readonly dialog = inject(MatDialog);

  constructor() {
    console.log('Created Foobar Component -> ', this.data.name)
  }

  onClick() { console.log('boop', this.data) }

  openDialog() {
    this.dialog.open(MyDialogComponent, {
      data: { name: this.data.name }
    });
  }
}
