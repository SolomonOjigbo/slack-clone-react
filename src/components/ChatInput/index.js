import { Button } from "@mui/material";
import { Firebase } from "firebase/app";
import {
	addDoc,
	doc,
	collection,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { ChatInputContainer } from "./ChatInput.styles";

function ChatInput({ channelName, channelId, chatRef }) {
	const [input, setInput] = useState("");
	const [user] = useAuthState(auth);

	const sendMessage = (e) => {
		e.preventDefault();
		if (!channelId) {
			return false;
		}

		addDoc(collection(db, "rooms", channelId, "messages"), {
			message: input,
			timestamp: serverTimestamp(),
			user: user.displayName,
			userImage: user.photoURL,
		}).catch((e) => {
			console.log(e);
		});
		chatRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
		setInput("");
	};

	return (
		<ChatInputContainer>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message #${channelName}`}
				/>
				<Button hidden type="submit" onClick={sendMessage}>
					SEND
				</Button>
			</form>
		</ChatInputContainer>
	);
}

export default ChatInput;
