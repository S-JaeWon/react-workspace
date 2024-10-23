import React from "react";
import { useLocation } from "react-router-dom";

function QuestionDetail() {
  const location = useLocation();

  // console.log(location); // -> object 안에 pathname 확인
  const questionId = location.pathname.split("/")[2];

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl p-6 mb-4">
        <h1 className="text-2xl font-bold mb-4">제목1</h1>
        <textarea
          className="textarea textarea-bordered w-full h-96"
          placeholder="Bio"
          readOnly
          value="내용1"
        ></textarea>
      </div>
      <div className="card bg-base-100 shadow-xl p-6">
        <h3 className="text-xl font-semibold mb-4">답변 목록</h3>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">작성자: 철수</span>
            <span className="label-text">
              작성일: {new Date().toLocaleString()}
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-20"
            placeholder="Bio"
            readOnly
            value="답변1"
          ></textarea>
          <label className="label">
            <span className="label-text">작성자: 철수</span>
            <span className="label-text">
              작성일: {new Date().toLocaleString()}
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full h-20"
            placeholder="Bio"
            readOnly
            value="답변1"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;
