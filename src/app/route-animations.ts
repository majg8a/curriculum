import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';

const optional = { optional: true };

export const slide = trigger('slide', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100vw',
        }),
      ],
      optional
    ),

    query(
      ':enter',
      [
        style({
          transform: 'translateX(-100%)',
        }),
      ],
      optional
    ),

    group([
      query(
        ':leave',
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
        ':enter',
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

// export const orbitate = trigger('orbitate', [
//   transition('* <=> *', [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         width: '100vw',
//       }),
//     ]),

//     query(':enter', [
//       style({
//         transform: 'translateX(-100%)',
//       }),
//     ]),

//     group([
//       query(
//         ':leave',
//         [
//           animate(
//             '600ms',
//             style({
//               transform: 'translateX(100%)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),

//       query(
//         ':enter',
//         [
//           animate(
//             '600ms',
//             style({
//               transform: 'translateX(0%)',
//             })
//           ),
//         ],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);
