import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent {
 isImageVisble = false;

  showTimeout(){
    setTimeout(()=>  {
      this.isImageVisble= true;
    },400);
  }
}
