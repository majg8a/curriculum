import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ContactUsService } from 'src/app/core/services/contact-us.service';

@Component({
  selector: 'app-contact',
  template: ` <div class="container">
    <ng-container *ngIf="!(sent$ | async); else sent">
      <form [formGroup]="form" (ngSubmit)="handleSubmit(form.value)">
        <h1>Contact</h1>
        <p>
          A great Vision without great people is irrelevant. Let's work
          together...
        </p>
        <input
          type="text"
          formControlName="name"
          placeholder=" Enter your Name"
        />
        <input
          type="email"
          formControlName="email"
          placeholder=" Enter a valid email address
"
        />
        <textarea
          formControlName="message"
          placeholder=" Enter your message..."
        ></textarea>
        <a>
          <button type="submit" [disabled]="form.invalid">Send</button>
        </a>
      </form>
    </ng-container>

    <ng-template #sent> <h1>Sent! now await for the reponse</h1></ng-template>
  </div>`,
  styles: [
    `
      h1 {
        font-family: IBM_Plex_Sans_bold;
      }
    `,
    `
      @media (min-width: 1200px) {
        input.ng-invalid.ng-touched,
        textarea.ng-invalid.ng-touched {
          border: 1px solid red;
        }

        button {
          background: none;
          width: min-content;
          border: none;
          color: white;
        }

        a {
          background-color: #00a8ff;
          width: min-content;
          background: #0511f2;
          border: 1px solid #0511f2;
          padding: 0.6vw 2.57vw;
          color: white;
          transition: all 0.2s ease-in-out;
        }
        a:active {
          background-color: rgba(5, 17, 142, 1) !important;
        }
        a:hover {
          background: rgba(5, 17, 142, 0.5);
        }
        button,
        h1,
        p {
          margin: 0px;
        }

        form {
          display: grid;
          row-gap: 1.71vw;
          font-family: 'WigendaTypewrite';
        }

        input,
        textarea {
          resize: none;
          font-size: 1vw !important;
          background-color: #e5e5e5;
          border: 1px solid #b4b4b4;
        }
        textarea {
          height: 8.26vw;
        }
        input {
          height: 2.44vw;
        }
        .container {
          width: 27.31vw;
          position: absolute;
          top: 19.17vw;
          left: 9vw;
        }
      }
    `,
    `
      @media (max-width: 1200px) {
        input.ng-invalid.ng-touched,
        textarea.ng-invalid.ng-touched {
          border: 1px solid red;
        }

        button {
          background: none;
          width: min-content;
          border: none;
          color: white;
          width: 24vw;
          height: 8vw;
        }

        a {
          background-color: #00a8ff;
          width: min-content;
          background: #0511f2;
          border: 1px solid #0511f2;
          padding: 0.6vw 2.57vw;
          color: white;
          transition: all 0.2s ease-in-out;
        }
        a:active {
          background-color: rgba(5, 17, 142, 1) !important;
        }
        a:hover {
          background: rgba(5, 17, 142, 0.5);
        }
        button,
        h1,
        p {
          margin: 0px;
        }

        h1 {
          font-size: 5vw;
        }

        p {
          font-size: 2.77vw;
          /* font-weight: 500; */
        }

        form {
          display: grid;
          row-gap: 4vw;
          font-family: 'WigendaTypewrite';
        }

        input,
        textarea {
          resize: none;
          font-size: 2.5vw !important;
          background-color: #e5e5e5;
          border: 1px solid #b4b4b4;
        }
        textarea {
          height: 8.26vw;
        }
        input {
          height: 6vw;
        }

        .container {
          width: 90vw;
          position: absolute;
          top: 54.44vw;
          left: 5vw;
        }
      }
    `,
  ],
})
export class ContactComponent {
  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  sent$ = new BehaviorSubject<boolean>(false);

  constructor(
    private formBuilder: FormBuilder,
    private contactUs: ContactUsService
  ) {}

  handleSubmit(formValue: any) {
    this.sent$.next(true);
    this.contactUs
      .handleAddContactUs(formValue)
      .then(() => {
        this.form.reset();
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
