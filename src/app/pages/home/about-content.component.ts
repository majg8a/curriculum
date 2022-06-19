import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content',
  template: `
    <div class="container">
      <!-- juan -->
      <pre>
        {{ backgroundText }}
      </pre
      >
      <div class="content">
        <p>
          Computer Engineer, graduated in 2019 from U.R.B.E (Universidad Rafael
          Belloso Chacín), with more than 4 years of experience as developer.
          <br />
          <br />

          2 years as a desktop developer and 3 years as a web developer, with
          participation in more than 5 robust applications in production,
          analytical ability and problem solving.
          <br />
          <br />

          With extensive experience at the business level from projects oriented
          to individuals to Startups or companies located at international
          level.
        </p>
        <p style="border-top: 1px solid #B4B4B4;">
          The basis of all this in the knowledge and evolution of it.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      @media (min-width: 1200px) {
        p {
          margin: 0px;
          padding: 3.63vw;
        }
        .content {
          box-sizing: border-box;

          position: absolute;
          /* width: 36.5vw; */
          width: 90vw;
          margin: 5vw;
          top: 13vw;
          left: 0px;
          background: #232323;

          font-family: 'WigendaTypewrite';
          font-style: normal;
          font-weight: 500;
          line-height: 161.1%;

          /* or 26px */

          color: #f2f2f2;
        }
        pre {
          position: absolute;
          color: #c9c9c9f0;
          top: 5vw;
          margin: 0px;
        }
        .container {
          position: relative;
          width: 100vw;
          padding-top: 8.6vw;
          padding-left: 2vw;
          font-family: 'WigendaTypewrite';
          font-size: 1.05vw;
        }
      }
    `,
    `
      @media (max-width: 1200px) {
        p {
          margin: 0px;
          padding: 7vw;
        }
        .content {
          box-sizing: border-box;

          position: absolute;
          /* width: 36.5vw; */
          width: 84vw;
          margin: 8vw;
          top: 13vw;
          left: 0px;
          background: #232323;

          font-family: 'WigendaTypewrite';
          font-style: normal;
          font-weight: 500;
          line-height: 161.1%;

          /* or 26px */

          color: #f2f2f2;
        }
        pre {
          position: absolute;
          color: #c9c9c9f0;
          top: 5vw;
          margin: 0px;
        }
        .container {
          position: relative;
          width: 100vw;
          padding-top: 8.6vw;
          padding-left: 2vw;
          font-family: 'WigendaTypewrite';
          font-size: 4vw;
          z-index: 2;
        }
      }
    `,
  ],
})
export class AboutContentComponent {
  backgroundText = `
  package misClases; //Se le declara un paquete

  public class Animal
  {
      private String raza;
      private String nombre;
      private int edad;

      public Animal(String nuevoNombre)
      {
          nombre = nuevoNombre; //Se le da un nombre al animal
      }

      //Método para obtener la edad del animal
      public int getEdad()
      {
          return edad;
      }

      //Método para establecer la edad del animal
      public void setEdad(int nuevaEdad)
      {
          edad = nuevaEdad;
      }

      //Método para obtener el nombre del animal
      public String getNombre()
      {
          return nombre;
      }
  }`;

  constructor() {}
}
