// 완전한 ES6 함수 코드
// 함수 본체에 한줄짜리 코드만 있을 경우
import { useState } from "react";
import styled from "styled-components";

import Input from "./BucketInput";
import { Outlet, useRoutes, Navigate } from "react-router-dom";
import BucketList from "./BucketList";
import BucketItem from "./BucketItem";
import BucketContent from "./BucketContent";

const ASideBar = styled.aside`
  width: 20rem;
  height: 100%;
  background-color: #f7f7f7;
  border-right: solid 2px #aaa;
  display: flex;
  flex-direction: column;
  & > * {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const mainAction = () => {
  return <Navigate to="content/3" />;
};

// return 명령과 {} 를 생략할 수 있다
const BucketMain = () => {
  const [bucket, setBucket] = useState();
  const [bucketList, setBUcketList] = useState([
    "개발자 되기",
    "리액트 정복",
    "Spring 정복",
  ]);

  const BucketItemListView = bucketList.map((item) => {
    return <BucketItem>{item}</BucketItem>;
  });

  return (
    <>
      <ASideBar>
        <Input />
        <BucketList>
          <ul>{BucketItemListView}</ul>
        </BucketList>
      </ASideBar>
      <div>
        <Outlet />
      </div>
    </>
  );
};
// const BucketMain = () => {
//   /**
//    * path : "content/:id", element:<BucketContent/>
//    *
//    * 만약 content:/우리나라 라는 요청이 오면
//    * content/* 의 path 를 찾고, 우리나라 라는 문자열을 id 변수에 저장하여
//    * BucketContent component 에게 전달하라
//    *
//    */
//   const routing = useRoutes([
//     {
//       path: "/",
//       element: <BucketMainBody />,
//       children: [{ path: "content/:id", element: <BucketContent /> }],
//     },
//   ]);
//   return routing;
// };
export default BucketMain;
