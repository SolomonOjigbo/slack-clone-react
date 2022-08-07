import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBody, AppLoading, LoadingSpinner } from "./App.styles";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import CircularProgress from "@mui/material/CircularProgress";
import SlackLogo from "./components/images/Slack-Logo.png";

function App() {
	const [user, loading, error] = useAuthState(auth);

	if (loading) {
		return (
			<AppLoading>
				<LoadingSpinner>
					<img src={SlackLogo} alt="" />
					<CircularProgress color="success" />
					<p>Initialising User...</p>
				</LoadingSpinner>
			</AppLoading>
		);
	}
	if (error) {
		return (
			<div>
				<p>Error: {error}</p>
			</div>
		);
	}

	return (
		<BrowserRouter>
			<>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<AppBody>
							<Sidebar />
							<Routes>
								<Route path="/" element={<Chat />} />
							</Routes>
						</AppBody>
					</>
				)}
			</>
		</BrowserRouter>
	);
}

export default App;
