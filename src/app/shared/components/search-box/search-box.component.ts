import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  output,
  ViewChild,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit {

private debouncer = new Subject<string>();

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.onDebounce.emit(value)
    })
  }
  @Input()
  placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  emitValue(value: string) {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
}
