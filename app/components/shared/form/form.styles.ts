export const formStyles = {
  form: {
    mt: 4,
    py: 2,
    px: 4,
    width: '27dvw',

    fontFamily: 'var(--font-tinos)',
    borderRadius: '10px',
    border: '1px solid lightgrey',

    '@media (max-width: 1024px)': {
        width: '30dvw'
      },

    '@media (max-width: 870px)': {
        width: '35dvw'
      },
    
    '@media (max-width: 768px)': {
      width: '45dvw'
    },

    '@media (max-width: 600px)': {
      width: '50dvw'
    },

    '@media (max-width: 520px)': {
      width: '70dvw'
    },
  },

  label: {
    fontSize: '14px',
  },

  input: {
    fontSize: '12px',
    color: 'primary.dark',
    '.MuiInputBase-input::placeholder': {
      fontSize: '12px',
      },
    },

};