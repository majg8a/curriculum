import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <div class="content">
        <div class="column1">
          <div class="name">Marcelo Gil</div>
          <div class="subtitle">Ing Informatica</div>
          <br />
          <br />
          <div class="title">Inf Personal</div>

          <div class="subtitle">Telefono</div>
          <div class="text">+58 424 6731180</div>

          <div class="subtitle">Email</div>
          <div class="text">majg8a@gmail.com</div>

          <div class="subtitle">Linkedin</div>
          <a
            href="https://www.linkedin.com/in/marcelo-gil-ochoa-7aa612179/"
            target="_blank"
            class="text a"
            >https://www.linkedin.com/in/marcelo-gil-ochoa-7aa612179/</a
          >
          <br />
          <br />

          <div class="title">Habilidades</div>
          <ng-container *ngFor="let skill of skills">
            <div class="subtitle">{{ skill.skill }}</div>
            <div class="skill-puntuation">
              <ng-container *ngFor="let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
                <div class="skill-score" *ngIf="i < skill.score"></div>
              </ng-container>
            </div>
            <br />
          </ng-container>
          <br />
          <br />
          <div class="title">Idiomas</div>
          <ng-container *ngFor="let skill of languages">
            <div class="subtitle">{{ skill.skill }}</div>
            <div class="skill-puntuation">
              <ng-container *ngFor="let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]">
                <div class="skill-score" *ngIf="i < skill.score"></div>
              </ng-container>
            </div>
            <br />
          </ng-container>
        </div>

        <div class="column2">
          <div class="paragraph">
            Ingeniero en Informática, graduado en 2019 de U.R.B.E (Universidad
            Rafael Belloso Chacín), con más de 4 años de experiencia como
            desarrollador (2 años como desarrollador desktop y 2 años como
            desarrollador web), con participación en más de 5 aplicaciones
            robustas en producción, algunas de las cualidades me representan son
            las siguientes: responsable, directo, lógico y analítico. Algunos de
            mis pasatiempos son: documentarme, ilustrar y cocinar. Actualmente
            en busca de nuevas oportunidades como desarrollador web.
          </div>
          <br />
          <div class="line"></div>
          <div class="name">Experiencia</div>
          <div class="line"></div>

          <br /><br />
          <div class="expirience">
            <span class="text">2021-03 - presente</span>
            <div>
              <div class="name">Desarrollador</div>
              <div class="text">
                Grupo CTG, Maracaibo
                <br />
                <ul class="activities">
                  <li>
                    Desarrollo en su totalidad del frontend de la pagina
                    <a href="https://www.grupoctg.com/#/"
                      >https://www.grupoctg.com/</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="expirience">
            <span class="text">2020-11 - 2021-03</span>
            <div>
              <div class="name">Desarrollador</div>
              <div class="text">
                Meta Studio, Maracaibo
                <br />
                <ul class="activities">
                  <li>
                    Desarrollo y mantenimiento de la pagina
                    <a href="https://quikpago.com/">https://quikpago.com/</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="expirience">
            <span class="text">2020-08 - 2021-11</span>
            <div>
              <div class="name">Desarrollador</div>
              <div class="text">
                Star Gas, Maracaibo
                <br />
                <ul class="activities">
                  <li>Desarrollo y mantenimiento del sistema interno</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="expirience">
            <span class="text">2019-07 - 2020-03</span>
            <div>
              <div class="name">Desarrollador</div>
              <div class="text">
                Grupo CTG, Maracaibo
                <br />
                <ul class="activities">
                  <li>
                    Desarrollo en su totalidad de la pagina
                    <a href="http://boletoaereo.com/"
                      >http://boletoaereo.com/</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="expirience">
            <span class="text">2017-04 - 2019-07</span>
            <div>
              <div class="name">Desarrollador</div>
              <div class="text">
                Inverdata, Maracaibo
                <br />
                <ul class="activities">
                  <li>
                    Desarrollo y mantenimiento de la aplicacion Saphiro
                    Biometrico
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styles: [
    `
      .activities {
        font-size: 1vw;
      }
      .expirience {
        display: flex;
        column-gap: 1vw;
        padding-bottom: 2vw;
      }
      .column2 {
        padding-right: 2vw;
        color: grey;
      }

      .line {
        width: 100%;
        height: 0.1vw;
        background-color: lightgrey;
      }

      .paragraph {
        font-size: 1.5vw;
        padding: 1vw;
        padding-left: 0px;
      }
      .a {
        color: white;
      }
      .skill-puntuation {
        width: 90%;
        height: 1vw;
        /* border: 0.1vw white solid; */
        display: flex;
        /* padding: 0.1vw; */
        background-color: rgb(38, 41, 49);
      }

      .skill-score {
        width: 10%;
        background-color: white;
      }

      .space {
        padding-bottom: 1vw !important;
      }

      .subtitle,
      .title,
      .name {
        padding-top: 0.5vw;
        padding-bottom: 0.5vw;
      }
      .text {
        padding: 1vw;
        font-size: 1vw;
      }

      .subtitle {
        font-size: 1.5vw;
      }
      .title {
        background-color: #181a18;
        font-size: 2vw;
        width: 100%;
        transform: translateX(-2vw);
        padding-left: 2vw;
      }
      .column1 {
        background-color: rgb(56, 61, 71);
        min-width: 30vw;
        padding-left: 1vw;
        padding-top: 1vw;
        padding-bottom: 1vw;
        display: block;
        color: white;
      }
      .name {
        font-size: 3vw;
        font-family: monserrate-bold;
      }

      .content {
        display: flex;
        column-gap: 2vw;
      }
    `,
  ],
})
export class AppComponent {
  menu = [{ title: 'Resumen', url: '#resumen' }];
  skills = [
    { skill: 'Angular', score: 9 },
    { skill: 'Node.js', score: 7 },
    { skill: 'javascript', score: 8 },
    { skill: 'java', score: 6 },
    { skill: 'Python', score: 6 },
    { skill: 'SQL', score: 8 },
  ];

  languages = [
    { skill: 'Ingles', score: 7 },
    { skill: 'Español', score: 10 },
  ];
}
