export const titleStyles = {
  h2: {
    width: '100%',
    fontFamily: 'var(--font-tinos)',
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    color: 'primary.main',
  },

  get h1() {
    return ({
      ...this.h2,
      fontSize: '4rem',
      textAlign: 'left',
      lineHeight: 1,

      '@media (max-width: 1024px)' : {
        fontSize: '3rem',
        textAlign: 'center',
      },

      '@media (max-width: 600px)' : {
        fontSize: '2.5rem',
        textAlign: 'center',
      }
    });
  },

  get h4() {
    return ({
      ...this.h2,
      textAlign: 'left',
      fontSize: '1.5rem',
    });
  }
};