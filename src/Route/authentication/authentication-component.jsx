import SignUpForm from "../../components/SignUp-Form/Sign-Up-Component";
import SignInFrom from "../../components/signIn-form/Sign-In-component";
import './authentication-page.scss';


export default function Authentication(){

    return (
        <div className="container-forms">
            <div className="left-panel-form">
                <SignInFrom />
            </div>
            <div  className="right-panel-form">
                <SignUpForm />
            </div>
        </div>
    )
}