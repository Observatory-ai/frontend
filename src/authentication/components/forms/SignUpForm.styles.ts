import theme from '../../../theme';

const classes = {
  formHeader: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    fontWeight: 'bold',
    margin: theme.spacing(3, 0, 2),
  },
};

export default classes;
