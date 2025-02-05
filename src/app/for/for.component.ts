import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports:[NgFor],
  templateUrl: './for.component.html',
  styleUrl: './for.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForComponent {
    names: string[]= ["Maximiliano","Gabriel","Rhood","Acronimax", "PNZIDo"];
}
