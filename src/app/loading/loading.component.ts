import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {
 isContenReady = false;

 ngOnInit(): void {
   setTimeout(()=> {
     this.isContenReady = true;
   },4000)
 }
}
