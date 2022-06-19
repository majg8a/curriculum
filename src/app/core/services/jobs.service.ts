import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobs = [
    {
      company: 'Inverdata',
      projects: [
        'Development and maintenance of the Saphiro Biometric application',
      ],
      range: '2017-04 - 2019-07',
      description:
        'Biometric Saphiro, made with java with swing and postgresql, my role was to develop and maintain the product, implement schedules and calculate payroll to a certain extent, for its operation.',
    },
    {
      company: 'CTG Group',
      projects: ['Development of the entire frontend of the page'],
      range: '2019-07 - 2020-03',
      description: `Developer and manager, made with angular2, node.js and sql server, developing a dynamic page.

        Internal system, made with java with javafx and postgresql, user interface development, windows and forms to enter information.`,
    },
    {
      company: 'Stargas',
      projects: ['Development and maintenance of the internal system'],
      range: '2019-07 - 2020-03',
      description: `Internal system, made with angular2, asp.net with C#, and sql server, user interface development, business logic and endpoint creation, cruds and a multi-table log system.`,
    },
    {
      company: 'Quikpay',
      projects: [`Development and Maintenance`],
      range: '2020-11 - 2021-03',
      description: `Made with angular2, firebase and node.js, development of user interface and business logic, creation of cruds, the scheduled purchase system, monitoring system of orders and business hours.`,
    },
    {
      company: 'CTG Group',
      projects: ['Web page project', 'Development and Maintenance'],
      range: '2021-03 - Present',
      description: `Made with angular2, java and postgresql, user interface development, lazy loading, dynamic content development, content manager, airline ticket reservation process.

      Internal system, made with java with javafx and postgresql, user interface development, windows and forms to enter information.`,
    },
  ];

  pageType$ = new BehaviorSubject<string>('a');
  currentIndex = 0;
  currentIndex$ = new BehaviorSubject<number>(0);
  handleJobs(index: number) {
    this.currentIndex = index;
    this.currentIndex$.next(index);
    const start = index * 3;
    const end = start + 3 > this.jobs.length ? this.jobs.length : start + 3;
    return this.jobs.slice(start, end);
  }

  handleJobsMobile(index: number) {
    this.currentIndex = index;
    this.currentIndex$.next(index);
    const start = index;
    const end = start > this.jobs.length ? this.jobs.length - 1 : start;
    return [this.jobs[end]];
  }
}
