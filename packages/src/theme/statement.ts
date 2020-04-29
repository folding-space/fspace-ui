interface Theme {
  background: background,
  text: text,
  secondary: string
  primary: string,
  success: string,
  warning: string,
  info: string,
  error: string,
  track: string,
  divider: string,
  default: string
}
interface background {
  default: string,
  paper: string,
  chip: string
}
interface text {
  primary: string,
  secondary: string,
  alternate: string,
  disabled: string,
  hint: string,
  warning: string
}