// import React from "react";
// import style from "./NavMain.module.css";
// import { Link } from "react-router-dom";
// // import { ReactComponent as IconMenu } from "../SideBar/IconsSideBar/menu.svg";
// // import { ReactComponent as IconX } from "../SideBar/IconsSideBar/x.svg";
// import PropTypes from "prop-types";
// import Search from "../../TodoContainer/Components/Search/Search.js";
// // import { ReactComponent as IconHome } from "../SideBar/IconsSideBar/home.svg";
// import { Tooltip } from "antd";
// import { MenuOutlined, CloseOutlined, HomeOutlined } from "@ant-design/icons";
// import { Layout, Menu } from "antd";

// const { Header } = Layout;

// const NavMain = ({ setSideBar, sideBar, handleSearch }) => {
//   //Hamburger state
//   const [hamburgerMenu, setHamburgerMenu] = React.useState(true);
//   //Sidebar and hamburger/x icons
//   const handleIconMenu = () => {
//     setHamburgerMenu(!hamburgerMenu);
//     setSideBar(!sideBar);
//   };

//   return (
//     <Header className={style.nav_container}>
//       <Menu mode="horizontal" className={style.nav_list}>
//         <Menu.Item key="1" className={style.menu}>
//           {hamburgerMenu ? (
//             <Tooltip title="Sidebar Menu">
//               <Link to="#">
//                 <MenuOutlined
//                   className={style.icon_menu}
//                   onClick={handleIconMenu}
//                 />
//               </Link>
//             </Tooltip>
//           ) : (
//             <Tooltip title="Close Menu">
//               <Link to="#">
//                 <CloseOutlined
//                   className={style.icon_menu}
//                   onClick={handleIconMenu}
//                 />
//               </Link>
//             </Tooltip>
//           )}
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Tooltip title="Matrix Home">
//             <Link to="/">
//               <HomeOutlined className={style.icon_menu} />
//             </Link>
//           </Tooltip>
//         </Menu.Item>
//         <div className={style["search-container"]}>
//           <li>
//             <Search handleSearch={handleSearch} />
//           </li>
//         </div>
//       </Menu>
//     </Header>
//   );
// };

// NavMain.propTypes = {
//   setSideBar: PropTypes.func,
//   sideBar: PropTypes.bool,
//   handleSearch: PropTypes.func,
// };

// export default NavMain;
