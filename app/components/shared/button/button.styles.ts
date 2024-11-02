export const buttonStyles = {
  button: {
    padding: '3px 50px',
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
