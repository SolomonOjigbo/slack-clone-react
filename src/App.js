import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBody } from "./App.styles";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
	const [user, loading, error] = useAuthState(auth);

	return (
		<>
			<div className="App">
				<BrowserRouter>
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
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
