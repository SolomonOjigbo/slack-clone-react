import styled from "styled-components";

export const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;

export const AppLoading = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100%;
`;

export const LoadingSpinner = styled.div`
	text-align: center;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> img {
		height: 200px;
		padding: 10px;
		margin-bottom: 10px;
	}
	> p {
		margin-top: 20px;
	}
`;
