import React from "react";
import {
	HeaderAvatar,
	HeaderContainer,
	HeaderLeft,
	HeaderRight,
	HeaderSearch,
} from "./Header.styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutline from "@mui/icons-material/HelpOutline";

function Header() {
	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar />
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
