import React, { useState } from "react";
import Ridi_TextContainer from "../components/Ridi_TextContainer";
import { Link } from "react-router-dom";

const Ridi = ({ text }) => {
  const [clicked, setClicked] = useState(false);

  const haddleHidden = () => {
    setClicked(clicked ? false : true);
    clicked && document.querySelector("header").classList.toggle("hidden");
    clicked && document.querySelector("footer").classList.toggle("hidden");
  };

  return (
    <div id="ridi_books" onClick={haddleHidden}>
      <div className="h-full select-none">
        <header
          id="header"
          className="fixed top-0 w-full bg-gray-100 hidden border-b border-gray-300 flex"
          style={{ height: "51px" }}
        >
          <div
            className="flex w-full"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            <Link to="/">{"<"}</Link>
            <h2 className="  p-2 font-bold ">제목제목</h2>
          </div>
        </header>
        <main style={{ maxWidth: "720px", margin: "0 auto" }}>
          <Ridi_TextContainer text={text} />
        </main>
        <footer className="fixed bottom-0 w-full hidden">
          <div id="ViewSeting" className="p-2  hidden ">
            <ul>
              <li>배경색</li>
              <li>
                <ul>
                  <li>글씨체</li>
                  <li className="flex">
                    <div className="title">글자크기</div>
                    <div className="btn_wrap">
                      <button>-</button>
                      <button>+</button>
                    </div>
                  </li>
                  <li>문단 너비</li>
                  <li>줄 간격</li>
                </ul>
              </li>
              <li>화 별 댓글 숨기기</li>
            </ul>
          </div>
          <div
            style={{
              height: "36px",
            }}
            className="context bg-gray-100 pt-2 text-sm "
          >
            <div
              className="subtitle_wrap"
              style={{ maxWidth: "720px", margin: "0 auto" }}
            >
              <h3 style={{ height: "20px" }}>제목제목 1화</h3>
            </div>
          </div>
          <div
            id="bottom_nav"
            className="bg-white p-2 ,"
            style={{ height: "49.5px" }}
          >
            <div
              className="w-full"
              style={{ maxWidth: "720px", margin: "0 auto" }}
            >
              <button>보기 설정</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Ridi;
