import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import TodoContainer from "./TodoContainer/TodoContainer";
import NavMain from "./UI/NavMain/NavMain.js";
import SideBar from "./UI/SideBar/SideBar";
import MatrixImg from "./UI/Images/the-matrix.png";
import PointBreakImg from "./UI/Images/pointbreak1.png";
import BucketListImg from "./UI/Images/bucket-list.png";
import InceptionImg from "./UI/Images/inception.png";

const App = () => {
  //sidebar state
  const [sideBar, setSideBar] = React.useState(false);

  //sidebar state to activate routing links
  const [currentLink, setCurrentLink] = React.useState(false);

  //----------> Search Section (Navbar) <--------------//
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // State for modal
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

  return (
    <Router>
      <div className={styles.todoCont_split_box}>
        <div className={styles.todoCont_MainNav}>
          <NavMain
            setSideBar={setSideBar}
            sideBar={sideBar}
            handleSearch={handleSearch}
          />
        </div>
        <div className={styles.todoCont_left_pane_sideBar}>
          <SideBar
            sideBar={sideBar}
            onSideBar={setSideBar}
            setCurrentLink={setCurrentLink}
            currentLink={currentLink}
          />
        </div>
        <div className={sideBar ? styles["todo_container"] : styles["active"]}>
          <div className={styles.todoCon_middle_pane_todoList}>
            <Routes>
              <Route
                path="/"
                element={
                  <TodoContainer
                    sideBar={sideBar}
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
        </div>
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
      </div>
    </Router>
  );
};
export default App;
