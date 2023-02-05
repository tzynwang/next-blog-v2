import type { Theme, MuiComponentDefaultOverrides } from '@Theme/types';

export default (t: Theme): MuiComponentDefaultOverrides => ({
  MuiChip: {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      root: {
        height: '24px',
        maxWidth: '120px',
        borderRadius: 0,
        cursor: 'pointer',
        [t.breakpoints.up('lg')]: {
          maxWidth: 'unset',
        },
      },
    },
  },
});
