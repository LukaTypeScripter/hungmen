import {Injectable, OnDestroy} from '@angular/core';
import {AsyncSubject, Subject} from 'rxjs';

@Injectable()
export abstract class unsub implements OnDestroy {
  unsubscribe$ = new AsyncSubject<void>();

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}