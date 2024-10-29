import { ChangeDetectionStrategy, Component, InjectionToken, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoobarComponent } from './foobar/foobar.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

export interface SomeData {
  component?: any;
  name: string;
}

export const DATA_TOKEN = new InjectionToken<SomeData>('');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'stackblitz-angular-component-outlet-test';

  data: SomeData[] = [
    {
      component: FoobarComponent,
      name: 'First Foobar Component'
    },
    {
      component: FoobarComponent,
      name: 'Second Foobar Component'
    },
    {
      component: FoobarComponent,
      name: 'Third Foobar Component'
    },
    {
      component: undefined,
      name: 'No Component'
    }
  ]

  createInjector(datum: SomeData): Injector {
    return Injector.create({
      providers: [
        { provide: DATA_TOKEN, useValue: datum },
      ],
    });
  }

}
