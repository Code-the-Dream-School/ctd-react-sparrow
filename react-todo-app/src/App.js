import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import TodoContainer from "./TodoContainer/TodoContainer";
// import NavMain from "./UI/NavMain/NavMain.js";
import Search from "./TodoContainer/Components/Search/Search";
import { Layout, Menu, Tooltip } from "antd";

import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  ThunderboltOutlined,
  FireOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

import MatrixImg from "./UI/Images/the-matrix.png";
import PointBreakImg from "./UI/Images/pointbreak1.png";
import BucketListImg from "./UI/Images/bucket-list.png";
import InceptionImg from "./UI/Images/inception.png";

const { Content, Sider } = Layout;

const App = () => {
  //sidebar state
  const [collapsed, setCollapsed] = useState(false);

  //sidebar state to activate routing links
  const [currentLink, setCurrentLink] = useState(false);

  //----------> Search Section <--------------//
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // State for Image modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    // console.log("handleImageClick called with image:", image);
    setSelectedImage(image);
    // console.log("selectedImage state updated to:", selectedImage);
    setModalOpen(true);
    // console.log("modalOpen state updated to:", modalOpen);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };

  const siderRef = React.useRef(null);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          className={`${styles.sider} ${collapsed ? styles.collapsed : ""}`}
          ref={siderRef}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
          // style={{ backgroundColor: "var(--primary-color)" }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultselectedkeys={["1"]}
            selectedkeys={[currentLink]}
            onSelect={(item) => setCurrentLink(item.key)}
            mode="inline"
          >
            <div style={{ height: "60px" }}></div>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => setCurrentLink("/")}
            >
              <Tooltip
                title="Daily Hacks"
                placement="top"
                style={{ marginLeft: "30px" }}
              >
                <NavLink to="/">The Matrix</NavLink>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<ThunderboltOutlined />}
              onClick={() => setCurrentLink("/pointbreak")}
            >
              <Tooltip
                title="Weekly Habits"
                placement="top"
                style={{ marginLeft: "30px" }}
              >
                <NavLink to="/pointbreak">Point Break</NavLink>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<FireOutlined />}
              onClick={() => setCurrentLink("/bucket")}
            >
              <Tooltip
                title="Annual Goals"
                placement="top"
                style={{ marginLeft: "30px" }}
              >
                <NavLink to="/bucket">Bucket List</NavLink>
              </Tooltip>
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<GlobalOutlined />}
              onClick={() => setCurrentLink("/inception")}
            >
              <Tooltip
                title="Lifetime Ideas"
                placement="top"
                style={{ marginLeft: "30px" }}
              >
                <NavLink to="/inception">Inception</NavLink>
              </Tooltip>
            </Menu.Item>
            <Menu.Item key="5">
              {/* <div style={{ paddingTop: "50px", zIndex: 10 }}> */}
              <Tooltip
                title="Search Actions"
                placement="top"
                style={{ marginTop: "40px" }}
              >
                <Search handleSearch={handleSearch} />
              </Tooltip>
              {/* </div> */}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <TodoContainer
                      collapsed={collapsed}
                      tableName={"The Matrix"}
                      setCurrentLink={setCurrentLink}
                      searchTerm={searchTerm}
                      image={MatrixImg}
                      handleImageClick={handleImageClick}
                    />
                  }
                ></Route>
                <Route
                  path="/pointbreak"
                  element={
                    <TodoContainer
                      tableName={"Point Break"}
                      searchTerm={searchTerm}
                      image={PointBreakImg}
                      handleImageClick={handleImageClick}
                    />
                  }
                />
                <Route
                  path="/bucket"
                  element={
                    <TodoContainer
                      tableName={"The Bucket List"}
                      searchTerm={searchTerm}
                      image={BucketListImg}
                      handleImageClick={handleImageClick}
                    />
                  }
                />
                <Route
                  path="/inception"
                  element={
                    <TodoContainer
                      tableName={"Inception"}
                      searchTerm={searchTerm}
                      image={InceptionImg}
                      handleImageClick={handleImageClick}
                    />
                  }
                />
              </Routes>
            </div>
          </Content>

          {/* Modal */}
          {modalOpen && (
            <div className={styles.modalContainer} onClick={closeModal}>
              <div className={styles.modal}>
                <button className={styles.closeButton} onClick={closeModal}>
                  X
                </button>
                <img className={styles.modalImage} src={selectedImage} alt="" />
              </div>
            </div>
          )}
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
