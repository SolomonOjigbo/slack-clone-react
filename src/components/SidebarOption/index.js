import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import {
	SidebarOptionChannel,
	SidebarOptionContainer,
} from "./SidebarOption.styles";

function SidebarOption({ Icon, title, addChannelOption, id }) {
	const addChannel = () => {
		const channelName = prompt("Please enter the channel name");

		if (channelName) {
			addDoc(collection(db, "rooms"), {
				name: channelName,
			});
		}
	};

	const selectChannel = () => {};

	return (
		<SidebarOptionContainer
			onClick={addChannelOption ? addChannel : selectChannel}
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
