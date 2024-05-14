import { useContext, useState } from "react";
import { createUserWithEmail, getCollectionDoc, getDataBase } from "../../Utils/firebase/firebase-util";
import Form from "../default/Form";
import "./sign-in.scss";
import Button from "../default/Button";
import { myContext } from "../../contexts/user-context-component";

export default function SignUpForm(){

    const defaultFormField = {
        displayName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    }

    const [formField, setFromField] = useState(defaultFormField);

    
    const {setSignValue} = useContext(myContext)

    const {displayName, email, phoneNumber, password, confirmPassword} = formField

   async function handleFormSubmit(e){
        e.preventDefault();
        if(document.querySelector('.pwd').value === document.querySelector('.confirmPwd').value){
            const result = await createUserWithEmail(email, password);
            console.log(result.user);
            console.log(`this is from the sign up page `);
            setSignValue(result.user)
            const Instance = await getCollectionDoc(result.user, {displayName});
        }
        else{
            alert('Password and confirm Password are not same');
        }
        setFromField(defaultFormField);
    }

    function handleFormFieldChange(e){
        setFromField({...formField, [e.target.name]: e.target.value})
        console.log(formField)
    }

    return(
        <div className="sign-in-form">
            <h2>Don't have an account?</h2>
            <p>Sign up with email and password</p>
            <form onSubmit={handleFormSubmit}>
                <Form label="Name"
                    required 
                    onChange={handleFormFieldChange} 
                    name="displayName" 
                    value={displayName} 
                 />

                <Form label= "Email"   
                    type="email" 
                    required 
                    onChange={handleFormFieldChange} 
                    name="email" 
                    value={email} 
                />
                
                <Form label= "Phone Number"   
                    type="number" 
                    required 
                    onChange={handleFormFieldChange} 
                    name="phoneNumber" 
                    value={phoneNumber} 
                />

                <Form label= "Password"  
                    type="password" 
                    className="pwd" 
                    required 
                    onChange={handleFormFieldChange} 
                    name="password" 
                    value={password}  
                />

                <Form label= "Confirm Password"  
                    type="password" 
                    className="confirmPwd" 
                    required 
                    onChange={handleFormFieldChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                />
                <Button className="primary" type="submit">Submit</Button>
            </form>
        </div>
    )
}