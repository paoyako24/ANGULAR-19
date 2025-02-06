
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone:true,
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IfComponent {
 protected isVisible = true;
}
