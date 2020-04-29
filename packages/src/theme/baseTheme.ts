import './statement'
export default (theme: Theme) => {
  return `
  body{
    background-color: ${theme.background.default};
    color: ${theme.text.primary};
  }

  a{
    color: ${theme.secondary};
  }
  `;
};
