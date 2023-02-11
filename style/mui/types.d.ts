import type { Theme, Components } from '@mui/material/styles';

export type MuiComponentDefaultOverrides = Components<
  Omit<Theme, 'components'>
>;

export type { Theme, Components };
