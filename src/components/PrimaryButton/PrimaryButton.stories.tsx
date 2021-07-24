
import PrimaryButton from "./PrimaryButton";
import "../../index.css";

const xyz = {
    title : "My Button",
    component: PrimaryButton,
};

const Template = (args: any) => 
    <PrimaryButton {...args}></PrimaryButton>;

export const main:any = Template.bind({});
main.args = {
    children: "Sign In",
};

export default xyz;