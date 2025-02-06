
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent {
  protected selectedValue = "option 1";
}
