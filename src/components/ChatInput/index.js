import { Button } from "@mui/material";
import { addDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "../../firebase";
import { ChatInputContainer } from "./ChatInput.styles";

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState("");

	const sendMessage = (e) => {
		e.preventDefault();

		if (channelId) {
			return false;
		}

		// addDoc(collection(db, "rooms").doc(channelId).collection("messages")) {
		// 			message: inputRef.current.value;
		// 		});
	};
	return (
		<ChatInputContainer>
			ChatInput
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Message #Room"
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;
