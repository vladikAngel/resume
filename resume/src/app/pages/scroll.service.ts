import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollSubject = new Subject<string>();


  scroll(blockId: string) {
    this.scrollSubject.next(blockId);
    console.log(blockId)
  }

  getScrollSubject() {
    return this.scrollSubject.asObservable();

  }
}
