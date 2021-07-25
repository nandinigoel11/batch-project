
import ProgressBar from "./ProgressBar";
import "../../index.css";

export default {
    title : "Progress Bar",
    component: ProgressBar,
    argTypes:{
        theme:{
            control: {type: "select"},
        },
    },
};

export const Main = (args:any) => <ProgressBar {...args}></ProgressBar>

Main.args = {
    className: " ",
};

