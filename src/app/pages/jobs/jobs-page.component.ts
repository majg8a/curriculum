import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { JobsService } from 'src/app/core/services/jobs.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-jobs-page',
  template: `
    <div class="job-container">
      <div *ngFor="let job of jobs$ | async" class="job">
        <h1 class="title">
          {{ job?.company }}
        </h1>
        <ul>
          <li *ngFor="let project of job?.projects">
            {{ project }}
          </li>
        </ul>
        <h6>
          {{ job?.range }}
        </h6>
        <p>
          {{ job?.description }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      @media (min-width: 1200px) {
        .title {
          background: rgba(54, 54, 54, 1);
          padding: 0px 2vw;
          min-width: 100%;
          transform: translateX(-2vw);
        }
        .job-container {
          display: grid;
          grid-template-columns: repeat(2, 34vw);
          column-gap: 3.37vw;
          row-gap: 3.37vw;
          padding-top: 12vw;
          padding-left: 10vw;
          max-width: min-content;
        }
        h1 {
          font-size: 2vw;
          font-family: 'IBM_Plex_Sans_bold' !important;
        }

        li,
        p {
          font-size: 1vw;
        }

        h6 {
          font-size: 0.8vw;
          color: rgba(242, 242, 242, 1) !important;
        }

        h1,
        ul,
        li,
        h6,
        p {
          margin: 0px;
          padding: 0px;
          font-family: 'WigendaTypewrite';
        }
        .job {
          padding: 2vw;
          padding-top: 0px;

          background: #232323;
          border: 1px solid #b4b4b4;
          display: grid;

          row-gap: 1vw;
          /* max-width: 34vw; */
        }
      }
    `,
    `
      @media (max-width: 1200px) {
        .title {
          background: rgba(54, 54, 54, 1);
          padding: 0px 5vw;
          min-width: 100%;
          transform: translateX(-5vw);
        }
        .job-container {
          display: grid;
          grid-template-columns: repeat(1, 78vw);
          column-gap: 3.37vw;
          row-gap: 3.37vw;
          /* top: 35vw; */

          padding-top: 35vw;
          padding-left: 16vw;
          max-width: min-content;
        }
        h1 {
          font-size: 4.5vw;
          font-family: 'IBM_Plex_Sans_bold' !important;
        }

        li,
        h1,
        ul,
        li,
        h6,
        p {
          margin: 0px;
          padding: 0px;
          font-family: 'WigendaTypewrite';
        }
        ul {
          padding-top: 10vw;
        }

        p {
          font-size: 4vw;
          padding-top: 10vw;
        }

        h6 {
          font-size: 4vw;
          color: rgba(242, 242, 242, 1) !important;
        }

        .job {
          padding: 5vw;
          padding-top: 0px;

          background: #232323;
          border: 1px solid #b4b4b4;
          display: grid;

          row-gap: 1vw;
          /* max-width: 34vw; */
        }
      }
    `,
  ],
})
export class JobsPageComponent implements OnInit {
  jobs$ = combineLatest([this.route.params, this.utilService.isMobile$]).pipe(
    map(([params, isMobile]) => {
      return isMobile
        ? this.jobsService?.handleJobsMobile(params['id'])
        : this.jobsService?.handleJobs(params['id']);
    })
  );
  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute,
    private utilService: UtilService
  ) {}
  ngOnInit(): void {
    this.jobsService.pageType$.next(this.route.snapshot.data['animation']);
  }
}
