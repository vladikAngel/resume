import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scroll(blockId: string) {
    this.scrollToBlock(blockId);
  }
  scrollToBlock(blockId: string) {
    const block = document.getElementById(blockId);
    if (block) {
      block.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
