export const buttonStyles = {
  button: {
    padding: '3px 50px',
    fontFamily: 'var(--font-inter)',
    fontSize: '1rem',
    fontWeight: '700',
    backgroundColor: 'primary.main',
    color: 'secondary.main',
    boxShadow: 'none',
    borderRadius: '10px',
  },
  get submit() {
    return ({
      ...this.button,
      padding: '10px 60px',
    });
  }
};
