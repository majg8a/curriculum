import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';

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
    ]),
  ]),
]);
