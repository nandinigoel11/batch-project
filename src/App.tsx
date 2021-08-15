import { useEffect } from 'react';
import { FC,  Suspense } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { authActions } from './actions/auth.actions';
import { me } from './api/auth';
import { LS_AUTH_TOKEN } from './api/base';
import AppContainerPageLazy from './pages/AppContainer/AppContainer.Lazy';
import AuthPageLazy from './pages/Auth/Auth.Lazy';
import NotFoundPage from './pages/NotFound.page';
import { meSelector } from './selectors/auth.selectors';
import { useAppSelector } from './store';

interface Props {
}

const App: FC<Props> = () => {
  const user = useAppSelector(meSelector);
  
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
     if (!token){
       return;
     }
     me().then(u => authActions.fetch(u));
  }, []);

  if(!user && token){
    return <div><FaSpinner className="w-10 h-10 animate-spin"></FaSpinner></div>;
  }

  return (
    <>
    <Suspense fallback={<div className="mx-auto mt-10"> <FaSpinner className="w-10 h-10 animate-spin"></FaSpinner></div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]} exact>
            {user ? <Redirect to="/dashboard" /> : <AuthPageLazy />}
          </Route>
          <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
           {user ? <AppContainerPageLazy /> : <Redirect to="/login" />} 
          </Route>
          <Route>
            <NotFoundPage></NotFoundPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;

