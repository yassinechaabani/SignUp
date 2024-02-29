import { ChangeEvent, useState } from "react"
import './SignUp.css'

export default function ControlledComponent(){
    const [firstName,setFirstName]=useState('');
    const [firstNameError,setErrorfirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [lastNameError,setErrorlastName]=useState('');
    const [email,setemail]=useState('');
    const [emailError,setErrorEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordError,setErrorPassword]=useState('');
    const [passwordConfirmation,setPasswordConfirmation]=useState('');
    const [passwordConfirmationError,setErrorPasswordConfirmation]=useState('');
    
    const handleFrstName= (event: ChangeEvent<HTMLInputElement>) => {
        const Value = eivent.target.value;
        if (Value.length <= 15) {
          setFirstName(Value);
          setErrorfirstName('');
        } else {
            setErrorfirstName('First name should be less than 15 characters.');
        }
      };
      const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
        const Value = event.target.value;
        if (Value.length <= 15) {
          setLastName(Value);
          setErrorlastName('');
        } 
        else {
            setErrorlastName('Last name should be less than 15 characters.');
        }
      };
      const handlePassword= (event: ChangeEvent<HTMLInputElement>) => {
        const Value = event.target.value;
        setPassword(Value);
        if (password && Value !== passwordConfirmation) {
            setErrorPasswordConfirmation('Password confirmation does not match.');
        } else {
            setErrorPasswordConfirmation('');
        }
      };
      const handlePasswordConfirmation = (event: ChangeEvent<HTMLInputElement>) => {
        const Value = event.target.value;
        setPasswordConfirmation(Value);
        if (Value !== password) {
            setErrorPasswordConfirmation('Password confirmation does not match.');
        } else {
            setErrorPasswordConfirmation('');
        }
      };
return(
        <div className="signup-form">
            <h3>Create your account</h3>
            <p>Fill the form below to create an account</p>
            <form className="form">
                <div className="info">
                    <label htmlFor="">First Name *</label>
                    <input type="text" value={firstName} onChange={handleFirstName} required/>
                    {firstNameError && <p className="error">{firstNameError}</p>}
                </div>
                <div className="info">
                    <label htmlFor="">Lastt Name *</label>
                    <input type="text" value={lastName} onChange={handleLastName} required/>
                    {lastNameError && <p className="error">{lastNameError}</p>}
                </div>
                <div className="email">
                    <label htmlFor="">Email*</label>
                    <input type="email" required/>
                   
                </div>
                <div className="info">
                    <label htmlFor="">Password confirmation  *</label>
                    <input type="password" value={password} onChange={handlePasswordConfirmation} required/>
                    {passwordConfirmationError && <p className="error">{passwordConfirmationError}</p>}
                </div>
                <div className="info">
                    <label htmlFor="">Password *</label>
                    <input type="password" value={password} onChange={handlePassword} required/>
                    
                </div>
                <div>
                <p>We want you to know exactly how our service works and why we need your details. Please confirm that you have read,understood and accept the terms and conditions</p>
                 <input type="checkbox" className="ckeckbox" required/>       
                 <p>I have read,understood and accept the terms and conditions.</p>
                </div>
                <button type='submit'id="subButton" >Next</button>
            </form>
        </div>
      )
}
