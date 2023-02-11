import theme, { makeStyles } from '@Style/mui/index';

const useMuiThemeStyle = makeStyles(
  (theme) => ({
    fabPosition: {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        right: theme.spacing(3),
        bottom: theme.spacing(3),
      },
    },
  }),
  { classNamePrefix: 'useMuiThemeStyle', defaultTheme: theme }
);

export default useMuiThemeStyle;
