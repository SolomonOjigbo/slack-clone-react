import styled from "styled-components";

export const SidebarContainer = styled.div`
	background-color: var(--slack-color);
	flex: 0.3;
	color: white;
	border-top: 1px solid #49274b;
	max-width: 268px;
	margin-top: 86px;
	height: 100%;
`;

export const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: 13px;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
	}
`;

export const SidebarInfo = styled.div`
	flex: 1;

	> h2 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}

	> h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
		/* margin-bottom: 5px; */
	}

	> h3 > .MuiSvgIcon {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
		/* margin-bottom: 5px; */
	}
`;
