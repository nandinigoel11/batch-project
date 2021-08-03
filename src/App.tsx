import { FC, lazy, Suspense } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { LS_AUTH_TOKEN } from './api/base';
import AuthSection from './components/AuthSection';
import AppContainerPageLazy from './pages/AppContainer/AppContainer.Lazy';
import AuthPageLazy from './pages/Auth/Auth.Lazy';
import NotFoundPage from './pages/NotFound.page';

interface Props {
}

const App: FC<Props> = () => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <Suspense fallback={<div className="mx-auto mt-10"> <FaSpinner className="w-10 h-10 animate-spin"></FaSpinner></div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {token ? <Redirect to="/dashboard" /> : <AuthPageLazy />}
          </Route>
          <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
            <AppContainerPageLazy />
          </Route>
          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

