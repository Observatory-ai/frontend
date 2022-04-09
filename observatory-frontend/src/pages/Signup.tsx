import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import SignupForm from "../components/SignupForm";

function SignupPage() {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			style={{ minHeight: "98vh" }}>
			<SignupForm />
		</Grid>
	);
}

export default SignupPage;
