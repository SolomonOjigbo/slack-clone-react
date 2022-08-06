import React, { useEffect, useRef } from "react";
import {
	ChatContainer,
	ChatMessages,
	ChatBottom,
	Header,
	HeaderLeft,
	HeaderRight,
} from "./Chat.styles";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "../ChatInput";
import {
	useCollection,
	useCollectionOnce,
	useDocument,
	useDocumentOnce,
} from "react-firebase-hooks/firestore";
import { collection, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Message from "../Message";

function Chat() {
	const chatRef = useRef(null);
	const roomId = useSelector(selectRoomId);
	const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});
	const [roomMessages, loading] = useCollection(
		roomId && collection(db, "rooms", roomId, "messages"),
		{
			snapshotListenOptions: { includeMetadataChanges: true },
		}
	);

	console.log(roomDetails?.data());
	console.log(roomMessages);

	useEffect(() => {
		chatRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, [roomId, loading]);

	return (
		<ChatContainer>
			<>
				<Header>
					<HeaderLeft>
						<h4>
							<strong>
								<HeaderLeft>#{roomDetails?.data().name}</HeaderLeft>
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
				<ChatMessages>
					{roomMessages?.docs.map((doc) => {
						const { message, timestamp, user, userImage } = doc.data();
						return (
							<Message
								key={doc.id}
								message={message}
								timestamp={timestamp}
								user={user}
								userImage={userImage}
							/>
						);
					})}
					{/* <ChatBottom ref={chatRef} /> */}
				</ChatMessages>
				<ChatInput
					chatRef={chatRef}
					channelId={roomId}
					channelName={roomDetails?.data().name}
				/>
			</>
		</ChatContainer>
	);
}

export default Chat;
