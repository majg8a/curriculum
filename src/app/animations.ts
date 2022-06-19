import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
  state,
  animation,
} from '@angular/animations';

// const optional = { optional: true };

// export const translate = trigger('translate', [
//   transition('true <=> false', [
//     query(
//       'true, false',
//       [
//         style({
//           position: 'absolute',
//           // width: '100vw',
//         }),
//       ],
//       optional
//     ),

//     query(
//       'true',
//       [
//         style({
//           opacity: 0,
//           // width: '100vw',
//         }),
//       ],
//       optional
//     ),

//     group([
//       query(
//         'true',
//         [
//           animate(
//             '600ms',
//             style({
//               opacity: 1,

//               //   position: 'fixed',
//               transform: 'translateX(0%)',
//             })
//           ),
//         ],
//         optional
//       ),

//       query(
//         'false',
//         [
//           animate(
//             '600ms',
//             style({
//               //   position: 'absolute',
//               transform: 'translateX(100%)',
//               display: 'none',
//               opacity: 0,
//             })
//           ),
//         ],
//         optional
//       ),
//     ]),

//     //animate('600ms'),
//   ]),
// ]);

const optional = { optional: true };

export const translate = trigger('translate', [
  transition('* <=> *', [
    query(
      'false, true',
      [
        style({
          position: 'absolute',
          width: '100vw',
          height: '100vh',
        }),
      ],
      optional
    ),

    query(
      'true',
      [
        style({
          transform: 'translateX(-100%)',
        }),
      ],
      optional
    ),

    group([
      query(
        'false',
        [
          animate(
            '600ms',
            style({
              transform: 'translateX(100%)',
            })
          ),
        ],
        optional
      ),

      query(
        'true',
        [
          animate(
            '600ms',
            style({
              transform: 'translateX(0%)',
            })
          ),
        ],
        optional
      ),
      //query(':leave *', [style({}), animate(1, style({}))], optional),
    ]),
  ]),
]);
