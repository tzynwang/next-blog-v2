import type { Theme, MuiComponentDefaultOverrides } from '@Theme/types';

export default (t: Theme): MuiComponentDefaultOverrides => ({
  MuiChip: {
    defaultProps: {
      color: 'primary',
    },
    styleOverrides: {
      root: {
        cursor: 'pointer',
        maxWidth: '120px',
        [t.breakpoints.up('lg')]: {
          maxWidth: 'unset',
        },
      },
    },
  },
});
