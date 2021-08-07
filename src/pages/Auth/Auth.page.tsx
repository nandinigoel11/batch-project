import { FC, memo } from "react";
import { Route } from 'react-router-dom';
import { Switch } from "react-router-dom";
import AuthSection from "../../components/AuthSection";
import { User } from "../../models/User";
import LoginPage from "./Login.page";

import SignupPage from './Signup.page'

interface Props {
}

const Auth: FC<Props> = (Props) => {
    return (
        <div className="flex flex-row justify-between">
            <Switch>
                <Route path="/login">
                    <LoginPage ></LoginPage>
                </Route>
                <Route path="/signup">
                    <SignupPage></SignupPage>
                </Route>
            </Switch>
            <AuthSection></AuthSection>
        </div>
    );
};

Auth.defaultProps = {
}

export default memo(Auth);