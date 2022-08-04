import React from "react";
import {
	ChatContainer,
	ChatMessages,
	Header,
	HeaderLeft,
	HeaderRight,
} from "./Chat.styles";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "../ChatInput";

function Chat() {
	const roomId = useSelector(selectRoomId);

	return (
		<ChatContainer>
			<>
				<Header>
					<HeaderLeft>
						<h4>
							<strong>
								<HeaderLeft>Room-name</HeaderLeft>
							</strong>
						</h4>
						<StarBorderOutlinedIcon />
					</HeaderLeft>
					<HeaderRight>
						<p>
							<InfoOutlinedIcon /> Details
						</p>
					</HeaderRight>
				</Header>
				<ChatMessages>{}</ChatMessages>
				<ChatInput channelId={roomId} channelName={""} />
			</>
		</ChatContainer>
	);
}

export default Chat;
