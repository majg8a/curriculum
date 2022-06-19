import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  Router,
  RouterOutlet,
} from '@angular/router';
import {
  concatMap,
  debounce,
  debounceTime,
  map,
  of,
  pluck,
  switchMap,
  timeout,
  timer,
} from 'rxjs';
import { JobsService } from 'src/app/core/services/jobs.service';
import { StateService } from 'src/app/core/services/state.service';
import { UtilService } from 'src/app/core/services/util.service';
import { slide } from 'src/app/route-animations';

@Component({
  selector: 'app-jobs',
  template: `
    <ng-container
      *ngIf="{
        isMobile: isMobile$ | async
      } as state"
    >
      <div class="container">
        <pre class="code">{{ code }}</pre>
        <div class="submenu">
          <ng-container *ngIf="pageType$ | async as pageType">
            <ng-container
              *ngFor="let link of state.isMobile ? mobileLinks : links"
            >
              <div class="link">
                <a
                  [routerLink]="[
                    (index$ | async) + '' == link.url
                      ? pageType
                      : pageType === 'a'
                      ? 'b'
                      : 'a',
                    link.url
                  ]"
                  routerLinkActive="active"
                  #rla="routerLinkActive"
                >
                  <ng-container *ngIf="!rla.isActive; else active">
                    {{ link.name }}
                  </ng-container>
                  <ng-template #active>
                    {{ '<' + link.name + '/>' }}
                  </ng-template>
                </a>
                <span class="line"></span>
              </div>

              <!-- <br /> -->
            </ng-container>
          </ng-container>
        </div>
        <main [@slide]="prepareRoute(outlet)">
          <router-outlet #outlet="outlet"></router-outlet>
        </main>
      </div>
    </ng-container>
  `,
  styles: [
    `
      @media (min-width: 1200px) {
        .container {
          position: relative;
          height: 120vh;
        }

        .code {
          position: fixed;
          top: 22.55vw;
          left: 69vw;
          font-size: 1.12vw;
        }
        .submenu {
          position: fixed;
          left: 2.8vw;
          top: 12.5vw;
          z-index: 9999;
          display: grid;
          grid-template-columns: auto;
          align-content: center;
          row-gap: 1.3vw;
        }

        a {
          text-decoration: none;
          font-size: 1.05vw;
          color: rgba(180, 180, 180, 1);
          text-align: end;
          font-family: 'WigendaTypewrite';
          font-weight: bold;
          width: 100%;
        }
        .link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          column-gap: 0.36vw;
        }

        .active,
        .link {
          color: rgba(255, 255, 255, 1) !important;
        }

        .line {
          height: 2vw;
          width: 1px;
          background-color: rgba(180, 180, 180, 1);
        }
        .active.line {
          background-color: rgba(255, 255, 255, 1);
        }
      }
    `,
    `
      @media (max-width: 1200px) {
        .container {
          position: flex;
          height: 100vh;
        }

        .code {
          position: fixed;
          top: 22.55vw;
          left: 69vw;
          font-size: 1.12vw;
        }
        .submenu {
          position: fixed;
          left: 2vw;
          top: 35vw;
          z-index: 9999;
          display: grid;
          grid-template-columns: auto;
          align-content: center;
          row-gap: 6vw;
        }

        a {
          text-decoration: none;
          font-size: 4vw;
          color: rgba(180, 180, 180, 1);
          text-align: end;
          font-family: 'WigendaTypewrite';
          font-weight: bold;
          width: 100%;
          transition: 1s;
        }
        .link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          column-gap: 0.36vw;
        }

        .active,
        .link {
          color: rgba(255, 255, 255, 1) !important;
        }

        .line {
          height: 8.6vw;
          width: 1px;
          background-color: rgba(180, 180, 180, 1);
        }
        .active.line {
          background-color: rgba(255, 255, 255, 1);
        }
      }
    `,
  ],

  animations: [slide],
})
export class JobsComponent implements OnDestroy {
  code = `CPPFLAGS =
CPPLIBS =
main: Conjunto.o main.o
g++ -o main main.o Conjunto.o $(CPPLIGS)
Conjunto.o: Conjunto.cpp Conjunto.h
g++ $(CPPFLAGS) -c -o Conjunto.o Conjunto.cpp
main.o: Conjunto.h
g++ $(CPPFLAGS) -c -o main.o main.cpp
clean:
rm *.o main

//Mi primer programa en C++
# include <iostream>
using namespace std;
int main (){
  count << "hello World";
  return 0;
}`;

  isDarkTheme$ = this.state.stateChanged.pipe(
    map((state) => (state ? state : { isDarkTheme: true })),
    pluck('isDarkTheme')
  );

  links = [...Array(Math.ceil(this.jobsService.jobs.length / 3))].map(
    (o, i) => ({
      url: `${i}`,
      name: i + 1 > 10 ? i + 1 : `0${i + 1}`,
    })
  );

  mobileLinks = [...Array(Math.ceil(this.jobsService.jobs.length))].map(
    (o, i) => ({
      url: `${i}`,
      name: i + 1 > 10 ? i + 1 : `0${i + 1}`,
    })
  );

  pageType$ = this.jobsService.pageType$.pipe(debounceTime(100));

  index$ = this.jobsService.currentIndex$.pipe(debounceTime(100));

  isMobile$ = this.utilService.isMobile$;

  constructor(
    private state: StateService,
    private jobsService: JobsService,
    private utilService: UtilService
  ) {
    this.state.handlesetState({ isDarkTheme: true });
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      // outlet &&
      // outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  ngOnDestroy() {
    this.state.handlesetState({ isDarkTheme: false });
  }
}
