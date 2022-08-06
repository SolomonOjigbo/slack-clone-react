import styled from "styled-components";

export const LoginContainer = styled.div`
	background-color: #f8f8f8;
	height: 100vh;
	display: grid;
	place-items: center;
`;

export const LoginInnerContainer = styled.div`
	padding: 100px;
	text-align: center;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	> img {
		object-fit: contain;
		height: 200px;
		margin-bottom: 40px;
	}

	> button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: green;
		color: white;
		:hover {
			background-color: grey;
		}
	}

	> p {
		margin-top: 100px;
	}
`;
