import { rem } from 'polished'

const sharedButtonStyles = {
  boxSizing: 'border-box !important',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'body',
  textTransform: 'uppercase',
  fontSize: 'xs',
  variant: 'transitions.m',
  letterSpacing: 1,
  boxShadow: 'medium',
  lineHeight: 'tight',
  py: 'xs',
  px: 'm',
  borderRadius: 'xs',
  fontWeight: 500,

  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: 'hover',
    a: {
      color: 'white',
    },
  },
  a: {
    color: 'white',
    textDecoration: 'none',
  },
  '&[disabled]': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
}

const small = {
  py: 4,
  px: 'xs',
  fontSize: 'xxs',
  fontWeight: 'bold',
}
const outline = {
  ...sharedButtonStyles,
  padding: 'xxs',
  bg: 'transparent',
  border: '1px solid',
  color: 'text',
  fontWeight: 'bold',
  boxShadow: 'inset 0 0 0 0 currentColor',
  transition: '.3s',
  a: {
    color: 'text',
  },
  ':hover:not([disabled])': {
    boxShadow: 'inset 0 0 0 2px currentColor',
  },
}

const primary = {
  ...sharedButtonStyles,
  bg: 'primary',
}

const secondary = {
  ...sharedButtonStyles,
  bg: 'secondary',
}
const gradientPrimary = {
  variant: 'gradients.primary',
}

const gradientSecondary = {
  variant: 'gradients.secondary',
}

export const buttons = {
  primary: {
    ...primary,
    gradient: {
      ...primary,
      ...gradientPrimary,
    },
    small: {
      ...primary,
      ...small,
    },
  },
  secondary: {
    ...secondary,
    gradient: {
      ...secondary,
      ...gradientSecondary,
    },
    small: {
      ...secondary,
      ...small,
    },
  },
  outline: {
    ...outline,
    small: {
      ...outline,
      ...small,
    },
  },
  hamburger: {
    pointer: 'cursor',
    variant: 'transitions.m',
    svg: {
      stroke: 'headerColor',
      variant: 'transitions.m',
    },

    bg: 'transparent',
    '&:hover svg': {
      stroke: 'headerColorHover',
    },
    '&.btn-menu-opened': {
      transform: 'translate3d(4rem, 0, 0)',
    },
  },
}
