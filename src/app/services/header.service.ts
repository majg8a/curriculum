import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  activeLink = new BehaviorSubject<Number>(0);
  constructor() {}
}
