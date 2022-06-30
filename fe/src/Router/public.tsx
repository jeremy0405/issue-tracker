import { Route, Routes } from 'react-router-dom';
import { Home, Login, Oauth, SignUp } from 'pages';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Login />} />
        <Route path="/auth" element={<Oauth />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default PublicRouter;
