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
  errorIcon: {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.error.light,
  },
  submit: {
    fontWeight: 'bold',
    margin: theme.spacing(3, 0, 2),
  },
};

export default classes;
