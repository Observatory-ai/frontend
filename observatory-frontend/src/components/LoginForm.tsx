import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
	Avatar,
	Container,
	Typography,
	Link,
	TextField,
	useTheme,
	InputAdornment,
	IconButton,
	Grid,
	Stack,
	Divider,
} from "@mui/material";
import Iconify from "./Iconify";

export default function LoginForm() {
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

	const loginSchema = Yup.object().shape({
		usernameOrEmail: Yup.string().required("Username or email can't be empty"),
		password: Yup.string().required("Password can't be empty"),
	});

	const formik = useFormik({
		validationSchema: loginSchema,
		initialValues: { usernameOrEmail: "", password: "" },
		onSubmit: async (values, { setErrors }) => {
			console.log(values);
		},
	});

	return (
		<Container maxWidth='xs'>
			<div style={classes.paper}>
				<Avatar sx={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h4' sx={{ fontWeight: "bold" }}>
					Log in
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
					<TextField
						required
						autoFocus
						variant='outlined'
						margin='dense'
						label='Username or Email'
						type='text'
						fullWidth
						name='usernameOrEmail'
						placeholder='Username or Email'
						onChange={formik.handleChange}
						value={formik.values.usernameOrEmail}
						error={formik.touched.usernameOrEmail && Boolean(formik.errors.usernameOrEmail)}
						helperText={formik.touched.usernameOrEmail && formik.errors.usernameOrEmail}
					/>
					<TextField
						required
						variant='outlined'
						margin='dense'
						label='Password*'
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
					<Button type='submit' fullWidth disabled={formik.isSubmitting} sx={classes.submit} variant='contained'>
						Log in
					</Button>
					<Grid>
						<Grid item>
							<Link sx={{ fontWeight: "bold" }} href='#' variant='body2'>
								Don't have an account? Sign up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
