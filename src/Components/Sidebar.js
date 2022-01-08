import React, { useEffect } from "react";
import "./css/Sidebar.css";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  const randomNumber = (max = 100, min = 5) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={74}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={17} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={3} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={21} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={2} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={7} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={2} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
