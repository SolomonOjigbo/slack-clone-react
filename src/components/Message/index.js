import React from "react";
import { MessageInfo, MessageContainer } from "./Message.styles";

function Message({ message, timestamp, user, userImage }) {
	return (
		<MessageContainer>
			<img src={userImage} alt="" />
			<MessageInfo>
				<h4>
					{user} {""}
					<span>{new Date(timestamp?.toDate()).toUTCString()}</span>
				</h4>
				<p>{message}</p>
			</MessageInfo>
		</MessageContainer>
	);
}

export default Message;
