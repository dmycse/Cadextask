export const heroStyles = {
  section: {
    pt: 4,
    pb: 8,
    px: 6,
    
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid lightgrey',
    borderBottom: 0,
    backgroundColor: 'primary.light',

    '@media (max-width: 1024px)' : {
      pt: 6,
      px: 2,
      flexDirection: 'column',
      gap: 6
    }
  },

  content: {
    pr: 4,
    maxWidth: '50%',

    '@media (max-width: 1024px)' : {
      maxWidth: '100%',
    }
  },

  video: {
    m: 0,
    width: '30rem',
    height: '18rem',
    backgroundColor: 'primary.dark',

    '@media (max-width: 600px)' : {
      width: '100%',
      height: '12rem',
    }
  }
};