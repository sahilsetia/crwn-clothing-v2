import Button from "../default/Button";
import Form from "../default/Form";
import {SignInWIthEmail, getCollectionDoc, googleSignIn } from "../../Utils/firebase/firebase-util";
import { useContext, useState } from "react";
import { myContext } from "../../contexts/user-context-component";


export default function SignInFrom(){

    const defaultValue ={
        email: '',
        password: ''
    }

    const [formField, setFormField] = useState(defaultValue);

    const {email, password} = formField;
    const {setSignValue} = useContext(myContext);

    async function handleFormSubmit(e){
        e.preventDefault();
        try{
            const result = await SignInWIthEmail(email, password);
            console.log(result.user);
            console.log(`this is from the sign in page`);
            setSignValue(result.user);
            setFormField(defaultValue);

        }catch(error){
            switch(error.code){
                case 'auth/invalid-credential':
                alert('incorrect password for email')
                break;
                default:
                    alert(error.code);
            }
        }
    } 

    async function signInLog(){
        const {user} = await googleSignIn();
        console.log(user);
        await getCollectionDoc(user)
    }

    function handleFormChnage(e){
        const {name, value} = e.target;
        setFormField({...formField, [name]:value})
    }



    return(
        <div  className="sign-up-form">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>
            <form onSubmit={handleFormSubmit}>
                <Form 
                    label="Email"
                    type="email"
                    required
                    onChange={handleFormChnage}
                    name = "email"
                    value = {email}

                />
                <Form
                    label="Password"
                    type="password"
                    required
                    onChange={handleFormChnage}
                    name= "password"
                    value = {password}
                />
                <Button className="primary">SignIn</Button>
                
                <Button type="button" className="google" onClick={signInLog}>Login with PopUp</Button>
            </form>
        </div>
    )
}