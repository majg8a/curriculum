import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService extends ObservableStore<any> {
  //state = new BehaviorSubject<any>({});
  constructor() {
    super({});
  }

  
  handlesetState(state: any) {
    this.setState(state);
  }
}
