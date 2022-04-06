import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LoginForm from "../components/LoginForm";

function LoginPage() {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			//style={{ minHeight: '100vh' }
		>
			<Grid item xs={3}>
				<LoginForm />
			</Grid>
		</Grid>
	);
}

export default LoginPage;
