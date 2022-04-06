import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { IconButton, InputAdornment } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import * as Yup from "yup";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		login: {
			textTransform: "unset",
			color: theme.palette.common.white,
			minWidth: "90px",
			boxShadow: "3px 2px 9px 0px rgba(0,0,0,0.15)",
			fontWeight: "bold",
		},
	})
);

export default function LoginForm() {
	const classes = useStyles();
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
		validationSchema: { loginSchema },
		initialValues: { usernameOrEmail: "", password: "" },
		onSubmit: async (values, { setErrors }) => {
			console.log(values);
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<TextField
				autoFocus
				error={!!formik.errors.usernameOrEmail}
				helperText={formik.errors.usernameOrEmail}
				variant='outlined'
				margin='dense'
				label='Username or Email*'
				type='text'
				fullWidth
				name='usernameOrEmail'
				placeholder='Username or Email*'
				onChange={formik.handleChange}
				value={formik.values.usernameOrEmail}
			/>
			<TextField
				error={!!formik.errors.password}
				helperText={formik.errors.password}
				variant='outlined'
				margin='dense'
				label='Password*'
				type={showPassword ? "text" : "password"}
				fullWidth
				name='password'
				placeholder='Password*'
				onChange={formik.handleChange}
				value={formik.values.password}
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
			<Button
				type='submit'
				disabled={formik.isSubmitting}
				className={classes.login}
				color='secondary'
				variant='outlined'>
				Login
			</Button>
		</form>
	);
}
