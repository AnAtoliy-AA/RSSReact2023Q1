import darkTheme from '@constants/styles/colors';

export type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: TObj[TKey] extends unknown[]
    ? `${TKey}`
    : TObj[TKey] extends object
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & (string | number)];

type ColorKey = RecursiveKeyOf<typeof darkTheme>;

const createCssVar = (items: object, prefix = '-'): Array<string> =>
  Object.entries(items).flatMap(([key, value]) => {
    const varName = `${prefix}-${key}`;

    if (typeof value === 'object') return createCssVar(value, varName);

    return `${varName}:${value}`;
  });

export const createCssVars = (themeColors: object) => createCssVar(themeColors).join(';');

const color = (colorKey: ColorKey) => {
  const cssVar = colorKey.split('.').reduce((acc, key) => `${acc}-${key}`, '-');

  return `var(${cssVar})`;
};

export default color;
