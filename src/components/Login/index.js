import React from "react";
import { LoginContainer, LoginInnerContainer } from "./Login.styles";
import SlackLogo from "../images/Slack-Logo.png";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
	const signIn = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider).catch((error) => alert(error.message));
	};
	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img src={SlackLogo} alt="Slack-logo" />
				<h2>Sign in to Slack Clone</h2>

				<Button onClick={signIn}>Sign in with Google</Button>
				<p>Copyright 2022, Solomon Ojigbo. All rights reserved</p>
			</LoginInnerContainer>
		</LoginContainer>
	);
}

export default Login;
