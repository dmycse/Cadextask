export const headerStyles = {
  header: {
    width: '100dvw',
    
    position: 'fixed', 
    top: 0,
    left: 0,
    right: 0, 
    zIndex: 10,
  },

  content: {
    padding: '20px 20px',
  
    justifyContent: 'space-between',
    alignItems: 'center',

    border: '1px solid lightgrey',
    borderTop: 'none',
    backgroundColor: 'white',
  },

  btn: {
    '@media (max-width: 425px)' : {
      display: 'none',
    }
  }

};