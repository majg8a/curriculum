import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, pluck } from 'rxjs';
import { JobsService } from 'src/app/core/services/jobs.service';
import { StateService } from 'src/app/core/services/state.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  template: `
    <header
      *ngIf="{
        activeLink: activeLink$ | async
      } as state"
    >
      <ng-container *ngFor="let link of links; index as i">
        <!-- <a [routerLink]="link?.url">
          <h1>
            {{ link.name }}
          </h1>
       
        </a> -->

        <a
          [routerLink]="link?.url"
          routerLinkActive
          #rla="routerLinkActive"
          class="link"
        >
          <h1 *ngIf="!rla?.isActive; else active">
            {{ link.name }}
          </h1>

          <ng-template #active>
            <h1 [ngClass]="(isDarkTheme$ | async) ? 'active-dark' : 'active'">
              {{ '<' + link.name + '/>' }}
            </h1>
          </ng-template>
        </a>
      </ng-container>
    </header>
  `,
  styles: [
    `
      @media (min-width: 1200px) {
        header {
          display: flex;
          column-gap: 2.31vw;
          justify-content: center;
          padding-top: 4.29vw;
          position: absolute;
          width: 100vw;
          z-index: 9999;
        }

        h1 {
          margin: 0px;
          font-size: 1.12vw;
        }

        .link {
          text-decoration: none;
          font-weight: 500;
          font-family: 'WigendaTypewrite';
          color: #b4b4b4;
        }

        .active {
          color: black;
        }

        .active-dark {
          color: white;
        }
      }
    `,
    `
      @media (max-width: 1200px) {
        header {
          display: flex;
          column-gap: 5.27vw;
          justify-content: center;
          padding-top: 4.29vw;
          position: absolute;
          width: 100vw;
          z-index: 9999;
        }

        h1 {
          margin: 0px;
          font-size: 4vw;
        }

        .link {
          text-decoration: none;
          font-weight: 500;
          font-family: 'WigendaTypewrite';
          color: #b4b4b4;
        }

        .active {
          color: black;
        }

        .active-dark {
          color: white;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  links = [
    {
      name: 'Home',
      url: '/home',
    },
    {
      name: 'About Me',
      url: '/about',
    },
    {
      name: 'Jobs',
      url: ['', 'jobs'],
    },
    {
      name: 'Contact',
      url: ['', 'contact'],
    },
  ];

  isDarkTheme$ = this.state.stateChanged.pipe(
    map((state) => (state ? state : { isDarkTheme: false })),
    pluck('isDarkTheme')
  );

  activeLink$ = this.headerService.activeLink;

  constructor(
    public headerService: HeaderService,
    private state: StateService
  ) {}
}
