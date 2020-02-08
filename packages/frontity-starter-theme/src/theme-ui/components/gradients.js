export const gradients = {
  primary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.primary}, ${t.colors.accent})`,
  },
  secondary: {
    backgroundImage: t =>
      `linear-gradient(60deg, ${t.colors.secondary}, ${t.colors.accent})`,
  },
}
