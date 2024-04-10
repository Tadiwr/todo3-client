import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefetchDataService {

  constructor() { }

  private sub = new Subject<void>();

  triggerRefetch() : void {
    this.sub.next()  
  }

  triggerRefetchObservable() : Observable<void> {
    return this.sub.asObservable();
  }
}
