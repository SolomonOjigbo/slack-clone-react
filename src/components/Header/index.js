import React from "react";
import {
	HeaderAvatar,
	HeaderContainer,
	HeaderLeft,
	HeaderLogout,
	HeaderRight,
	HeaderSearch,
} from "./Header.styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutline from "@mui/icons-material/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

function Header() {
	const [user] = useAuthState(auth);

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar alt={user?.displayName} src={user?.photoURL} />
				<HeaderLogout onClick={() => auth.signOut()} />
				<AccessTimeIcon />
			</HeaderLeft>
			<HeaderSearch>
				<SearchIcon />
				<input placeholder="Search" />
			</HeaderSearch>
			<HeaderRight>
				<HelpOutline />
			</HeaderRight>
		</HeaderContainer>
	);
}

export default Header;
