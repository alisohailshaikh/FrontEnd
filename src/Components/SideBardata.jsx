import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BalconyIcon from "@mui/icons-material/Balcony";
import ExploreIcon from "@mui/icons-material/Explore";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import jwtDecode from "jwt-decode";
import "./SB.css";

const SideBar = () => {
  const [SideBarData, setSideBarData] = React.useState([]);
  React.useEffect(() => {
    const domain = jwtDecode(localStorage.getItem("token")).userType;
    if (domain == "user") {
      setSideBarData([
        //array of objects
        {
          titile: "Home",
          icon: <DashboardIcon />,
          link: "/location",
        },
        {
          titile: "Personal Information",
          icon: <PermContactCalendarIcon />,
          link: "/perInfo",
        },
      ]);
    } else {
      setSideBarData([
        //array of objects
        {
          titile: "Home",
          icon: <DashboardIcon />,
          link: "/DB",
        },
        {
          titile: "Add Venue",
          icon: <AddBusinessIcon />,
          link: "/addLocation",
        },
        {
          titile: "My Venues",
          icon: <BalconyIcon />,
          link: "/myVenues",
        },
        {
          titile: "Explore All",
          icon: <ExploreIcon />,
          link: "/ShowAll",
        },
        {
          titile: "Archived",
          icon: <ArchiveIcon />,
          link: "/Archive",
        },
        {
          titile: "Deleted",
          icon: <DeleteIcon />,
          link: "/deleted",
        },
        {
          titile: "Personal Information",
          icon: <PermContactCalendarIcon />,
          link: "/perInfo",
        },
      ]);
    }
  }, []);
  return (
    <div className="SB">
      <ul className="SBList">
        <div className="Heading">  eventbanao.pk</div>
        {SideBarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname == val.link ? "active" : ""}
              className="SBRow"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div id="icon">{val.icon}</div> <div id="title">{val.titile}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
