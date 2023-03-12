enum OpacityVars {
  MAX = 900,
  PRE_MAX = 775,
  BIG = 675,
  PRE_BIG = 550,
  MEDIUM = 450,
  LITTLE = 325,
  PRE_MIN = 225,
  MIN = 100,
}

const darkPalette = {
  primary: {
    [OpacityVars.MAX]: '#2f0e31',
    [OpacityVars.PRE_MAX]: '#56195a',
    [OpacityVars.BIG]: '#7e2784',
    [OpacityVars.PRE_BIG]: '#b93dc1',
    [OpacityVars.MEDIUM]: '#d347dc',
    [OpacityVars.LITTLE]: '#e67bea',
    [OpacityVars.PRE_MIN]: '#f0acf0',
    [OpacityVars.MIN]: '#f6daf5',
  },
  orchid: {
    [OpacityVars.MAX]: '#2a1328',
    [OpacityVars.PRE_MAX]: '#4e2449',
    [OpacityVars.BIG]: '#73386c',
    [OpacityVars.PRE_BIG]: '#9a4d91',
    [OpacityVars.MEDIUM]: '#d06dc5',
    [OpacityVars.LITTLE]: '#d788cd',
    [OpacityVars.PRE_MIN]: '#e4b3dc',
    [OpacityVars.MIN]: '#f0dded',
  },
  neutral: {
    [OpacityVars.MAX]: '#040404',
    [OpacityVars.PRE_MAX]: '#343434',
    [OpacityVars.BIG]: '#4e4e4e',
    [OpacityVars.PRE_BIG]: '#696969',
    [OpacityVars.MEDIUM]: '#858585',
    [OpacityVars.LITTLE]: '#a3a3a3',
    [OpacityVars.PRE_MIN]: '#c2c2c2',
    [OpacityVars.MIN]: '#e2e2e2',
  },
  success: {
    [OpacityVars.MAX]: '#161e06',
    [OpacityVars.PRE_MAX]: '#223a05',
    [OpacityVars.BIG]: '#325706',
    [OpacityVars.PRE_BIG]: '#46750b',
    [OpacityVars.MEDIUM]: '#599411',
    [OpacityVars.LITTLE]: '#6fb517',
    [OpacityVars.PRE_MIN]: '#88d926',
    [OpacityVars.MIN]: '#a8f84c',
  },
  caution: {
    [OpacityVars.MAX]: '#1f1b06',
    [OpacityVars.PRE_MAX]: '#3a3404',
    [OpacityVars.BIG]: '#564e06',
    [OpacityVars.PRE_BIG]: '#746a0a',
    [OpacityVars.MEDIUM]: '#93850f',
    [OpacityVars.LITTLE]: '#b4a415',
    [OpacityVars.PRE_MIN]: '#ccba1a',
    [OpacityVars.MIN]: '#f8e34a',
  },
  danger: {
    [OpacityVars.MAX]: '#321106',
    [OpacityVars.PRE_MAX]: '#690b03',
    [OpacityVars.BIG]: '#9b080a',
    [OpacityVars.PRE_BIG]: '#e01114',
    [OpacityVars.MEDIUM]: '#fc2920',
    [OpacityVars.LITTLE]: '#fd7a60',
    [OpacityVars.PRE_MIN]: '#fdae9a',
    [OpacityVars.MIN]: '#fbdbd3',
  },
  info: {
    [OpacityVars.MAX]: '#071d35',
    [OpacityVars.PRE_MAX]: '#043661',
    [OpacityVars.BIG]: '#03518e',
    [OpacityVars.PRE_BIG]: '#0775ca',
    [OpacityVars.MEDIUM]: '#098aed',
    [OpacityVars.LITTLE]: '#64a7fe',
    [OpacityVars.PRE_MIN]: '#a3c5fd',
    [OpacityVars.MIN]: '#d8e3fb',
  },
};

const darkTheme = {
  primary: {
    text: darkPalette.primary[OpacityVars.MAX],
  },
  neutral: {
    background: darkPalette.neutral[OpacityVars.MAX],
  },
  danger: {
    text: darkPalette.danger[OpacityVars.BIG],
  },
  info: {
    text: darkPalette.info[OpacityVars.PRE_MAX],
  },
};

export default darkTheme;
