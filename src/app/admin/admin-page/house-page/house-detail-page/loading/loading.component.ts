import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bc-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  @Input() public progress: Observable<number>; // a number between 0 and 100;
  public percentage$: Observable<number>;

  @ViewChild('completion')
  public completion: ElementRef;

  ngOnInit() {
    const nativeCompletion = this.completion.nativeElement;
    this.progress.subscribe(val => {
      const width = nativeCompletion.parentElement.offsetWidth;
      const percentWidth = (val / 100) * width;
      nativeCompletion.style.width = `${percentWidth}px`;

      const percent = Math.floor((val * 10)) / 10;
      nativeCompletion.textContent = ` ${ percent }%`;
    });
  }
}
