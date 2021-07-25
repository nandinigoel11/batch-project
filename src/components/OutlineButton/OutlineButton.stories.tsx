
import OutlineButton from "./OutlineButton";
import "../../index.css";

export default {
    title : "Button",
    component: OutlineButton,
    argTypes: {
        theme: {
            control: {type: "select"},
        },
    },
};

export const Main = (args:any) => <OutlineButton {...args}></OutlineButton>

Main.args = {
    children: "Sign In",
    className: " ",
};

