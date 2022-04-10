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
	useTheme,
	Stack,
	Divider,
	InputAdornment,
	IconButton,
} from "@mui/material";
import Iconify from "./Iconify";

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
		},
		submit: {
			fontWeight: "bold",
			margin: theme.spacing(3, 0, 2),
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
		firstName: Yup.string().required("First name is required"),
		lastName: Yup.string().required("Last name is required"),
		username: Yup.string().required("Username is required"),
		email: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string().required("Password is required"),
		confirmPassword: Yup.string().when("password", {
			is: (val: [any]) => (val && val.length > 0 ? true : false),
			then: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
		}),
	});

	const formik = useFormik({
		validationSchema: signUpSchema,
		initialValues: { firstName: "", lastName: "", email: "", username: "", password: "", confirmPassword: "" },
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
				<Stack sx={{ marginTop: theme.spacing(4), width: "100%" }} direction='row' spacing={2}>
					<Button fullWidth size='large' color='inherit' variant='outlined'>
						{/*
            // @ts-ignore */}
						<Iconify icon='eva:google-fill' color='#DF3E30' height={24} />
					</Button>
					<Button fullWidth size='large' color='inherit' variant='outlined'>
						{/*
            // @ts-ignore */}
						<Iconify icon='eva:facebook-fill' color='#1877F2' height={24} />
					</Button>
				</Stack>
				<Divider sx={{ marginTop: 4, marginBottom: 3, width: "100%" }}>
					<Typography variant='body1' sx={{ fontWeight: "bold" }}>
						OR
					</Typography>
				</Divider>
				<form style={classes.form} onSubmit={formik.handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								required
								autoFocus
								variant='outlined'
								margin='dense'
								label='First Name'
								type='text'
								autoComplete='fname'
								name='firstName'
								placeholder='First name'
								onChange={formik.handleChange}
								value={formik.values.firstName}
								error={formik.touched.firstName && Boolean(formik.errors.firstName)}
								helperText={formik.touched.firstName && formik.errors.firstName}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								required
								variant='outlined'
								margin='dense'
								label='Last Name'
								type='text'
								name='lastName'
								placeholder='Last name'
								onChange={formik.handleChange}
								value={formik.values.lastName}
								error={formik.touched.lastName && Boolean(formik.errors.lastName)}
								helperText={formik.touched.lastName && formik.errors.lastName}
								autoComplete='lname'
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								variant='outlined'
								margin='dense'
								label='Email'
								type='text'
								name='email'
								placeholder='Email'
								onChange={formik.handleChange}
								value={formik.values.email}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								required
								variant='outlined'
								margin='dense'
								label='Username'
								type='text'
								name='username'
								placeholder='Username'
								onChange={formik.handleChange}
								value={formik.values.username}
								error={formik.touched.username && Boolean(formik.errors.username)}
								helperText={formik.touched.username && formik.errors.username}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								variant='outlined'
								margin='dense'
								label='Password'
								type={showPassword ? "text" : "password"}
								fullWidth
								name='password'
								placeholder='Password'
								onChange={formik.handleChange}
								value={formik.values.password}
								error={formik.touched.password && Boolean(formik.errors.password)}
								helperText={formik.touched.password && formik.errors.password}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge='end'>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								variant='outlined'
								margin='dense'
								label='Confirm password'
								type={showPassword ? "text" : "password"}
								fullWidth
								name='confirmPassword'
								placeholder='Confirm password'
								onChange={formik.handleChange}
								value={formik.values.confirmPassword}
								error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
								helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
							/>
						</Grid>
					</Grid>
					<Button type='submit' fullWidth disabled={formik.isSubmitting} sx={classes.submit} variant='contained'>
						Sign up
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
	);
}
