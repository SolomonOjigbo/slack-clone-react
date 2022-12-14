import styled from "styled-components";

export const ChatContainer = styled.div`
	flex: 0.7;
	flex-grow: 1;
	overflow-y: scroll;
	margin-top: 80px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-bottom: 1px solid lightgray;
`;

export const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	> h4 {
		display: flex;
		text-transform: lowercase;
		margin-right: 10px;
	}

	> h4 > .MuiSvgIcon-root {
		margin-left: 10px;
		font-size: 18px;
	}
`;

export const HeaderRight = styled.div`
	> p {
		display: flex;
		align-items: center;
		font-size: 14px;
		margin-right: 10px;
	}
`;

export const ChatBottom = styled.div`
	padding: 200px;
`;

export const ChatMessages = styled.div`
	padding: auto;
`;
