import { FC, memo } from "react";
import { Switch } from "react-router-dom";
import DashboardPage from './Dashboard.page';
import { Route } from 'react-router-dom';
import RecordingsPage from './Recordings.page';
import Sidebar from "../components/Sidebar";
import LecturePage from "./Lecture.page";


interface Props {
}
const AppContainer: FC<Props> = (Props) => {
    return (
        <div className="flex flex-row">
        <Sidebar></Sidebar>
        <Switch>
            <Route path="/dashboard">
                <DashboardPage></DashboardPage>
            </Route>
            <Route path="/recordings">
                <RecordingsPage></RecordingsPage>
            </Route>
            <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                <LecturePage></LecturePage>
            </Route>
            
        </Switch>
        </div>
    );
};

AppContainer.defaultProps = {
}

export default memo(AppContainer);