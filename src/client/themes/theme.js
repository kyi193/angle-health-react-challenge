import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  () => ({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(1),
    },
  })
);
