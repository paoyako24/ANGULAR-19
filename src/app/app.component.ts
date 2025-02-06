import { Component } from '@angular/core';

import { DeferComponent } from './defer/defer.component';
import { LoadingComponent } from './loading/loading.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@Component({
  selector: 'app-root',
  imports: [DeferComponent,PlaceholderComponent,LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CursoOsitosAngular';
}
