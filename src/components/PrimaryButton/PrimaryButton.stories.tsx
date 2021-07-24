import PrimaryButton from "./PrimaryButton";
import "../../index.css";

export default {
    title : "My Button",
    component: PrimaryButton,
    argTypes: {
        theme: {
            control: {type: "select"},
        },
    },
};

const Template = (args: any) => 
    <PrimaryButton {...args}></PrimaryButton>;

export const Main:any = Template.bind({});
Main.args = {
    children: "Sign In",
    className: " ",
};

