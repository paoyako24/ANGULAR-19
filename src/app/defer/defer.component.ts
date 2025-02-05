import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferComponent {
  isImageVisible = false;

  showImage() {
    this.isImageVisible = true;
  }
}
