const darkPalette = {
  primary: {
    900: '#2f0e31',
    775: '#56195a',
    675: '#7e2784',
    550: '#b93dc1',
    450: '#d347dc',
    325: '#e67bea',
    225: '#f0acf0',
    100: '#f6daf5',
  },
  orchid: {
    900: '#2a1328',
    775: '#4e2449',
    675: '#73386c',
    550: '#9a4d91',
    450: '#d06dc5',
    325: '#d788cd',
    225: '#e4b3dc',
    100: '#f0dded',
  },
  neutral: {
    900: '#040404',
    775: '#343434',
    675: '#4e4e4e',
    550: '#696969',
    450: '#858585',
    325: '#a3a3a3',
    225: '#c2c2c2',
    100: '#e2e2e2',
  },
  success: {
    900: '#161e06',
    775: '#223a05',
    675: '#325706',
    550: '#46750b',
    450: '#599411',
    325: '#6fb517',
    225: '#88d926',
    100: '#a8f84c',
  },
  caution: {
    900: '#1f1b06',
    775: '#3a3404',
    675: '#564e06',
    550: '#746a0a',
    450: '#93850f',
    325: '#b4a415',
    225: '#ccba1a',
    100: '#f8e34a',
  },
  danger: {
    900: '#321106',
    775: '#690b03',
    675: '#9b080a',
    550: '#e01114',
    450: '#fc2920',
    325: '#fd7a60',
    225: '#fdae9a',
    100: '#fbdbd3',
  },
  info: {
    900: '#071d35',
    775: '#043661',
    675: '#03518e',
    550: '#0775ca',
    450: '#098aed',
    325: '#64a7fe',
    225: '#a3c5fd',
    100: '#d8e3fb',
  },
};

const darkTheme = {
  primary: {
    text: darkPalette.primary[900],
  },
  neutral: {
    background: darkPalette.neutral[900],
  },
  danger: {
    text: darkPalette.danger[675],
  },
  info: {
    text: darkPalette.info[775],
  },
};

export default darkTheme;
