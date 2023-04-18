import darkTheme from '@constants/styles/colors';
import { createCssVars } from './stylesUtils';

describe('Style utils', () => {
  test('Css vars creates properly', () => {
    expect(createCssVars(darkTheme)).toContain('--primary');
    expect(createCssVars(darkTheme.primary)).toContain('--text:#56195a');
    expect(createCssVars(darkTheme)).toContain('--primary-text:#56195a;');

    expect(createCssVars(darkTheme)).toContain('--neutral');
    expect(createCssVars(darkTheme.neutral)).toContain('--background:#040404;');
    expect(createCssVars(darkTheme)).toContain('--neutral-background:#040404;');

    expect(createCssVars(darkTheme.neutral)).toContain('--button_background:#343434;');
    expect(createCssVars(darkTheme.neutral)).toContain('--card_background:#c2c2c2;');
    expect(createCssVars(darkTheme.neutral)).toContain('--card_title:#343434;');
    expect(createCssVars(darkTheme.neutral)).toContain('--title:#858585;');
    expect(createCssVars(darkTheme.neutral)).toContain('--shadow:#e2e2e2');
  });
});
