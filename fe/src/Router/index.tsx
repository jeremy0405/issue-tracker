import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';

import Login from 'pages/Login/index';
import Oauth from 'pages/Login/Oauth';
import SignUp from 'pages/Login/SignUp';

import Issues from 'pages/Issues';
import IssueDetail from 'pages/IssueDetail';
import AddIssue from 'pages/AddIssue';
import MilestoneList from 'pages/MilestoneList';
import LabelList from 'pages/LableList';

import NotFound from 'pages/NotFound';

const Routers = (): JSX.Element => {
  // 임시로 설정한 state (수정 예정입니다.)
  const hasToken = () => !!window.localStorage.getItem('refresh_token');
  const [isOAuth, setIsOAuth] = useState<boolean>(true);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {isOAuth ? (
          <>
            <Route path="/" element={<Home isOAuth={isOAuth} />}>
              <Route index element={<Issues />} />
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
              <Route path="/auth" element={<Oauth setIsOAuth={setIsOAuth} />} />
              <Route path="/sign-up/" element={<SignUp />} />
            </Route>
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
