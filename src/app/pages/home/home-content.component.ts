import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  template: `
    <div class="container">
      <div class="box">
        <ul>
          <p >Languages</p>
          <li>English Business Level</li>
          <li>Spanish mother tongue</li>
        </ul>
        <div>
          <p style="max-width: 25.26vw;">
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
      </div>
    </div>
  `,
  styles: [
    `
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
    `,
  ],
})
export class HomeContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
