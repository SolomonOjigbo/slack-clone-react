import React from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddIcon from "@mui/icons-material/Add";

import SidebarOption from "../SidebarOption";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

function Sidebar() {
	const [channels, loading, error] = useCollection(collection(db, "rooms"), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

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
			<SidebarOption Icon={InsertCommentIcon} title="Threads" />
			<SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
			<SidebarOption Icon={DraftsIcon} title="Saved items" />
			<SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
			<SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
			<SidebarOption Icon={AppsIcon} title="Apps" />
			<SidebarOption Icon={FileCopyIcon} title="File browser" />
			<SidebarOption Icon={ExpandLessIcon} title="Show less" />
			<hr />
			<SidebarOption Icon={ExpandMoreIcon} title="Channels" />
			<hr />
			<SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Channels: Loading...</span>}
			{channels && (
				<span>
					Channels:{" "}
					{channels?.docs.map((doc) => (
						<SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
					))}
				</span>
			)}
		</SidebarContainer>
	);
}

export default Sidebar;
