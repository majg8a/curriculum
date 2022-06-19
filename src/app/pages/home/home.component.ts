import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slide } from 'src/app/route-animations';

@Component({
  selector: 'app-home',
  template: `
    <!-- <app-header></app-header> -->

    <div class="container">
      <!-- <router-outlet></router-outlet> -->

      <main [@slide]="prepareRoute(outlet)">
        <router-outlet #outlet="outlet"></router-outlet>
      </main>

      <img src="assets/images/smile.png" alt="side-image" class="smile" />
      <div class="blue-rectangle">
        <div style="position: relative;">
          <!-- <div class="circle"></div> -->
          <img src="assets/images/circulo.png" alt="" class="circle" />
        </div>
        <div class="arrow">
          <img src="assets/images/vector.svg" alt="arrow" style="width:2vw;" />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* .content {
        max-width: 100vw;
      } */

      .container {
        font-size: 1.05vw;
        font-family: 'WigendaTypewrite';
        color: rgba(35, 35, 35, 0.94);
        position: relative;
        height: 100vh;
        min-height: 64.94vw;
      }

      .age {
        width: 2.18vw;
        text-align: center;
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
      .circle {
        /* background-color: #00bcd4; */
        /* border: 1px dashed #00bcd4; */
        width: 12vw;
        height: 12vw;
        /* border-radius: 50%; */
        top: -6vw;
        left: -6vw;
        position: absolute;
        animation: rotate 5s infinite linear;
      }

      .arrow {
        background-color: #d7e813;
        padding: 1.45vw;
        width: min-content;
      }
      .blue-rectangle {
        width: 45.43vw;
        min-height: 16.73vw;

        background: url('../../../assets/images/smile.png') #0511f2;
        background-position: calc(45.43vw - 38.49vw) calc(13.55vw - 38.62vw);
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-size: 38.49vw;
        position: absolute;

        bottom: 9.58vw;
        right: 0px;
        display: grid;
        align-content: space-between;
        /* justify-content: between; */
      }

      .side-image-relative {
        position: relative;
        width: 100%;
      }

      .smile {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 38.49vw;
      }
    `,
  ],
  animations: [slide],
})
export class HomeComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }
}
