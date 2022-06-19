import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { map, pluck } from 'rxjs';
import { StateService } from './core/services/state.service';
import { UtilService } from './core/services/util.service';
import { slide } from './route-animations';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <div
        class="fullscreen container"
        [ngClass]="(isDarkTheme$ | async) ? 'dark-theme' : 'light-theme'"
      >
        <app-header></app-header>

        <main [@slide]="prepareRoute(outlet)">
          <router-outlet #outlet="outlet"></router-outlet>
        </main>

        <div class="marquee">
          <p class="age">26</p>
          <marquee>
            <ng-container *ngFor="let i of availableToWork">
              <span [ngClass]="i | availableToWorkColor">
                Available to Work</span
              >
              -
            </ng-container>
          </marquee>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      @media (min-width: 1200px) {
        .container {
          transition: background-color 1s, color 1s;
        }
        .marquee {
          width: 100%;
          display: flex;
          bottom: 0px;
          height: 2.18vw;
          font-size: 1.05vw !important;
          font-family: 'WigendaTypewrite';
          align-items: center;
          color: #fff;
          background-color: #000;
          position: fixed;
          z-index: 9999;
        }

        main {
          width: 100%;
          min-height: 100vh;
        }

        .yellow {
          color: yellow;
        }

        .blue {
          color: lightblue;
        }

        .white {
          color: #f2f2f2;
        }
      }
    `,
    `
      @media (max-width: 1200px) {
        .container {
          transition: background-color 1s, color 1s;
        }
        .marquee {
          width: 100%;
          display: flex;
          bottom: 0px;
          height: 9vw;
          font-size: 4.44vw !important;
          font-family: 'WigendaTypewrite';
          align-items: center;
          color: #fff;
          background-color: #000;
          position: fixed;
          z-index: 9999;
        }

        main {
          width: 100%;
          min-height: 100vh;
        }

        .yellow {
          color: yellow;
        }

        .blue {
          color: lightblue;
        }

        .white {
          color: #f2f2f2;
        }
      }
    `,
  ],
  animations: [slide],
})
export class AppComponent {
  isDarkTheme$ = this.state.stateChanged.pipe(
    map((state) => (state ? state : { isDarkTheme: false })),
    pluck('isDarkTheme')
  );
  availableToWork = [...Array(10).keys()];

  isMobile$ = this.utilService.isMobile$;

  @HostListener('window:resize', ['$event'])
  resize() {
    this.isMobile$.next(window.innerWidth < 1200);
  }

  constructor(private state: StateService, private utilService: UtilService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }
}
