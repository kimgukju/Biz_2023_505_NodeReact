import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BbsMain from "../comps/BbsMain";
import App from "../App";
import MyPage from "../comps/MyPage";
import BBslist from "../comps/BBsList";
import BBsInput from "../comps/BbsInput";
import BBsDetail from "../comps/BBsDetail";

// Nav Provider 컴포넌트
// Nav 의 모든 설정(IA) 를 한곳에서 설정하는 컴포넌트
const MainRouter = () => {
  // nav 에서 Menu 를 클릭했을때 보여질 화면들 설정하기
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>나는 홈이다</h1> },
        { path: "/notice", element: <h1>나는 공지사항</h1> },
        {
          path: "/bbs",
          element: <BbsMain />,
          children: [
            { path: "", element: <BBslist /> },
            { path: "insert", element: <BBsInput /> },
            { path: "detail/:seq", element: <BBsDetail /> },
          ],
        },

        { path: "/mypage", element: <MyPage /> },
        {
          path: "/login",
          element: <h1>나는 로그인 화면</h1>,
          errorElement: <h1>오류 발생!!!!!!!!!!!!!!</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default MainRouter;
