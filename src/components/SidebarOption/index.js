import React from "react";

import {
	SidebarOptionChannel,
	SidebarOptionContainer,
} from "./SidebarOption.styles";

function SidebarOption({ Icon, title, addChannelOption }) {
	const addChannel = () => {
		const channelName = prompt("Please enter the channel name");
	};

	const selectedChannel = () => {};

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
