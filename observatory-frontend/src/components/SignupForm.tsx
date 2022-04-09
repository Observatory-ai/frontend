import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
	Avatar,
	Container,
	Typography,
	Link as MuiLink,
	TextField,
	Grid,
	createStyles,
	makeStyles,
	Theme,
	useTheme,
} from "@mui/material";

export default function SignUpForm() {
	const theme = useTheme();

	const classes = {
		paper: {
			display: "flex",
			flexDirection: "column" as "column",
			alignItems: "center",
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: "100%", // Fix IE 11 issue.
			marginTop: theme.spacing(3),
		},
		submit: {
			fontWeight: "bold",
			margin: theme.spacing(3, 0, 2),
		},
		signUp: {
			textTransform: "unset",
			color: theme.palette.common.white,
			minWidth: "90px",
			boxShadow: "3px 2px 9px 0px rgba(0,0,0,0.15)",
			fontWeight: "bold",
		},
	};

	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const signUpSchema = Yup.object().shape({
		usernameOrEmail: Yup.string().required("Username or email can't be empty"),
		password: Yup.string().required("Password can't be empty"),
	});

	const formik = useFormik({
		validationSchema: { signUpSchema },
		initialValues: { usernameOrEmail: "", password: "" },
		onSubmit: async (values, { setErrors }) => {
			console.log(values);
		},
	});

	return (
		<Container component='main' maxWidth='xs'>
			<div style={classes.paper}>
				<Avatar sx={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h4' sx={{ fontWeight: "bold" }}>
					Sign Up
				</Typography>
				<form style={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
							/>
						</Grid>
					</Grid>
					<Button type='submit' fullWidth variant='contained' color='primary' sx={classes.submit}>
						Sign Up
					</Button>
					<Grid>
						<Grid item>
							<MuiLink sx={{ fontWeight: "bold" }} href='#' variant='body2'>
								Already have an account? Sign in
							</MuiLink>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
		// <form onSubmit={formik.handleSubmit}>
		// 	<TextField
		// 		autoFocus
		// 		error={!!formik.errors.usernameOrEmail}
		// 		helperText={formik.errors.usernameOrEmail}
		// 		variant='outlined'
		// 		margin='dense'
		// 		label='Username or Email*'
		// 		type='text'
		// 		fullWidth
		// 		name='usernameOrEmail'
		// 		placeholder='Username or Email*'
		// 		onChange={formik.handleChange}
		// 		value={formik.values.usernameOrEmail}
		// 	/>
		// 	<TextField
		// 		error={!!formik.errors.password}
		// 		helperText={formik.errors.password}
		// 		variant='outlined'
		// 		margin='dense'
		// 		label='Password*'
		// 		type={showPassword ? "text" : "password"}
		// 		fullWidth
		// 		name='password'
		// 		placeholder='Password*'
		// 		onChange={formik.handleChange}
		// 		value={formik.values.password}
		// 		InputProps={{
		// 			endAdornment: (
		// 				<InputAdornment position='end'>
		// 					<IconButton
		// 						aria-label='toggle password visibility'
		// 						onClick={handleClickShowPassword}
		// 						onMouseDown={handleMouseDownPassword}
		// 						edge='end'>
		// 						{showPassword ? <Visibility /> : <VisibilityOff />}
		// 					</IconButton>
		// 				</InputAdornment>
		// 			),
		// 		}}
		// 	/>
		// 	<Button
		// 		type='submit'
		// 		disabled={formik.isSubmitting}
		// 		className={classes.login}
		// 		color='secondary'
		// 		variant='outlined'>
		// 		Login
		// 	</Button>
		// </form>
	);
}
