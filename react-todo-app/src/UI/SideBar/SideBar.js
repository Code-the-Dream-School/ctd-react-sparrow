// import React from "react";
// import style from "./SideBar.module.css";
// import { Link } from "react-router-dom";
// import { Tooltip, Layout, Menu, Sider } from "antd";
// import {
//   HomeOutlined,
//   ProfileOutlined,
//   InboxOutlined,
//   StarOutlined,
// } from "@ant-design/icons";

// const { Sider } = Layout;

// const SideBar = ({ sideBar }) => {
//   return (
//     <Sider
//       width={250}
//       theme="light"
//       className={sideBar ? style.nav_menu_active : style.nav_menu_done}
//     >
//       <div className={style.logo} />
//       <Menu theme="light" mode="inline" defaultselectedkeys={["1"]}>
//         <Menu.Item key="1" icon={<HomeOutlined />}>
//           <Tooltip title="Daily Hacks">
//             <Link to="/">The Matrix</Link>
//           </Tooltip>
//         </Menu.Item>
//         <Menu.Item key="2" icon={<InboxOutlined />}>
//           <Tooltip title="Weekly Habits">
//             <Link to="/pointbreak">Point Break</Link>
//           </Tooltip>
//         </Menu.Item>
//         <Menu.Item key="3" icon={<StarOutlined />}>
//           <Tooltip title="Annual Goals">
//             <Link to="/bucket">Bucket List</Link>
//           </Tooltip>
//         </Menu.Item>
//         <Menu.Item key="4" icon={<ProfileOutlined />}>
//           <Tooltip title="Lifetime Ideas">
//             <Link to="/inception">Inception</Link>
//           </Tooltip>
//         </Menu.Item>
//       </Menu>
//     </Sider>
//   );
// };

// export default SideBar;
