import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppBody } from "./App.styles";
import Header from "./components/Header";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<>
						<Header />
						<AppBody>
							<Sidebar />
							<Routes>
								<Route path="/" element={<Home />} />
							</Routes>
						</AppBody>
					</>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
