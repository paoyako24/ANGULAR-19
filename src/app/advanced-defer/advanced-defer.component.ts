import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-advanced-defer',
  imports: [],
  templateUrl: './advanced-defer.component.html',
  styleUrl: './advanced-defer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedDeferComponent {
   protected dataRedy= true;
}
