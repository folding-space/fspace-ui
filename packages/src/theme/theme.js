import BaseTheme from './baseTheme';
import ColorTheme from './colorTheme';
import light from './light';
import dark from './dark';

const themes = [
  BaseTheme, ColorTheme
];

const vars = {
  light, dark
};

function getThemeStyle () {
  const themeId = 'fs';
  let styleEl = document.getElementById(themeId);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = themeId;
  document.body.appendChild(styleEl);
  return styleEl;
}

export function addCreateTheme(theme) {
  const length = themes.length;
  themes.splice(length - 1, 0, theme);
  return this;
}

export function add (name, varObj = {}, extendName = 'light') {
  const theme = {
    name,
    ...vars[extendName],
    ...varObj
  };
  vars[name] = theme;
  return this;
}

export function useTheme (name) {
  const themeEl = getThemeStyle();
  themeEl.innerHTML = themes.map((theme) => theme(vars[name], vars[name].type, name)).join(' ');
  return this;
}

export function generate (name) {
  return themes.map((theme) => theme(vars[name], vars[name].type, name)).join(' ');
}