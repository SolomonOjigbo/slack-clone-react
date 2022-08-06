import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";

import {
	SidebarOptionChannel,
	SidebarOptionContainer,
} from "./SidebarOption.styles";
import { enterRoom } from "../../features/appSlice";

function SidebarOption({ Icon, title, id, addChannelOption }) {
	const dispatch = useDispatch();
	const addChannel = () => {
		const channelName = prompt("Please enter the channel name");

		if (channelName) {
			addDoc(collection(db, "rooms"), {
				name: channelName,
			});
		}
	};

	const selectedChannel = () => {
		if (id) {
			dispatch(
				enterRoom({
					roomId: id,
				})
			);
		}
	};

	return (
		<SidebarOptionContainer
			onClick={addChannelOption ? addChannel : selectedChannel}
		>
			{Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
			{Icon ? (
				<h3> {title}</h3>
			) : (
				<SidebarOptionChannel>
					<span>#</span> {title}
				</SidebarOptionChannel>
			)}
		</SidebarOptionContainer>
	);
}

export default SidebarOption;
