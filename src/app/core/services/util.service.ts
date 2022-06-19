import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  isMobile$ = new BehaviorSubject<Boolean>(window.innerWidth < 1200);
  constructor() {}
}
