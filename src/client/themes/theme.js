import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(
  () => ({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    },
    dataGreenText: {
      color: colors.lightGreen,
      display: 'flex'
    },
    dataRedText: {
      color: 'red',
      display: 'flex'
    },
    dataBoldText: {
      fontWeight: 800,
      fontSize: '18px'
    },
    dataGrayText: {
      color: colors.darkGray,
      marginLeft: '10px'
    },
    cryptoTable: {
      width: '80%',
      margin: 'auto',
      borderWidth: 1,
      borderColor: 'black',
    },
    nameContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    circulatingSupplyText: {
      color: colors.darkGray,
    },
    cryptoRow: {
      "&:hover": {
        backgroundColor: `${colors.lightGray} !important`
      }
    },
    logo: {
      height: '25px',
      width: '25px',
      marginRight: '10px'
    }
  })
);

export const colors = {
  lightGreen: '#1ec749',
  darkGray: 'rgba(105, 105, 105, .8)',
  lightGray: 'rgba(239, 242, 245, .4)',
  lightGraySolid: "#d7d9dc"
};
