import React from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";

function Sidebar() {
	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2> Slack 2.0 </h2>
					<h3>
						<FiberManualRecordIcon />
						Solomon Ojigbo
					</h3>
				</SidebarInfo>
				<CreateIcon />
			</SidebarHeader>
		</SidebarContainer>
	);
}

export default Sidebar;
