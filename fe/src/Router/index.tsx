import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Issues from 'pages/Issues';
import IssueDetail from 'pages/IssueDetail';
import AddIssue from 'pages/AddIssue';
import MilestoneList from 'pages/MilestoneList';
import LabelList from 'pages/LableList';
import NotFound from 'pages/NotFound';
import Oauth from 'pages/Login/Oauth';
import SignUp from 'pages/Login/SignUp';

const Routers = (): JSX.Element => {
  // 임시로 설정한 state (수정 예정입니다.)
  const [isOAuth, setIsOAuth] = useState<boolean>(false);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {isOAuth ? (
          <>
            <Route path="/" element={<Home isOAuth={isOAuth} />}>
              <Route index element={<Issues />} />
              <Route path="/login" element={<Login />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/issues/new" element={<AddIssue />} />
              <Route path="/issues/:issueId" element={<IssueDetail />} />
              <Route path="/labels" element={<LabelList />} />
              <Route path="/milestones" element={<MilestoneList />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home isOAuth={isOAuth} />}>
              <Route index element={<Login />} />
              <Route path="/auth" element={<Oauth />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
