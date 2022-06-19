import { Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  template: `
    <div class="container">
      <div class="box">
        <ul id="languages">
          <p>Languages</p>
          <li>English Business Level</li>
          <li>Spanish mother tongue</li>
        </ul>
        <div id="qoute">
          <p>
            “A good software developer works with discipline and perseverance
            from day one.”
            <br />
            <br />
            -Omar Bradley-
          </p>
        </div>
      </div>

      <div class="greetings">
        <h1>Marcelo Antonio Gil</h1>
        <p>
          Greetings, thank you for being here and being part of this experience,
          so you can learn about my abilities and skills, in the world of
          development (Frontend + Backend), with 5 years of experience.
        </p>
        <div class="bar-container">
          <a href="#languages">
            <div class="bar"></div>
          </a>
          <a href="#qoute">
            <div class="bar"></div>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @media (min-width: 1200px) {
        .greetings {
          padding: 10.35vw 8.39vw;
        }

        .greetings h1 {
          color: #232323;
        }
        .greetings p {
          width: 31.41vw;
        }

        .box {
          display: flex;
          border: 1px solid #b4b4b4;
          width: min-content;
          /* margin-top: 8.6vw; */
        }

        .container {
          padding-top: 8.6vw;
        }

        .box ul,
        .box div {
          padding: 3.76vw;
        }

        .box ul {
          width: 22.15vw;
          display: grid;
          justify-content: center;
          align-content: center;
          border-right: 1px solid #b4b4b4;
          min-height: 100%;
          margin: 0px;
          padding: 0px;
        }

        .box ul li {
          width: 13.35vw;
        }

        .box div {
          width: 34.25vw;
        }

        h1 {
          font-family: 'IBM_Plex_Sans_bold';
          font-size: 1.98vw;
        }
      }
    `,
    `
      @media (max-width: 1200px) {
        a {
          padding: 2vw;
        }
        .bar-container {
          display: flex;
          column-gap: 2vw;
        }
        .bar {
          height: 1vw;
          background-color: grey;
          transition: 0.2s;
          width: 8vw;
        }
        .bar:active {
          width: 15vw;
          background-color: black;
        }
        .greetings {
          padding: 10.35vw 8.39vw;
        }

        .greetings h1 {
          color: #232323;
        }
        .greetings p {
          font-size: 3.8vw;
        }

        .box {
          display: flex;
          /* border: 1px solid #b4b4b4; */
          max-width: 100vw;
          /* margin-top: 8.6vw; */
          font-size: 3.8vw;
          overflow-x: hidden;

          scroll-behavior: smooth;
        }

        .container {
          padding-top: 65vw;
        }

        .box ul,
        .box div {
          padding: 4vw;
        }

        .box ul {
          min-width: 65vw;
          max-width: 65vw;
          height: 26vw;
          display: grid;
          justify-content: center;
          align-content: center;
          min-height: 100%;
          margin: 0px;
          padding: 0px;
          border: 1px solid #b4b4b4;
          margin-right: 40vw;
        }

        .box div {
          min-width: 70vw;
          max-width: 70vw;
          border: 1px solid #b4b4b4;
        }

        h1 {
          font-family: 'IBM_Plex_Sans_bold';
          font-size: 8vw;
        }
      }
    `,
  ],
})
export class HomeContentComponent {
  constructor() {}
}
