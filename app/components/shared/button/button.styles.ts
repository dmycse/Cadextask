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
      mt: 2, 
      padding: '5px 60px',
      width: '100%',
    });
  }
};
