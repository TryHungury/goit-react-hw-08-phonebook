import React from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState } from "react";
import { regThunk } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;

    input {
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        width: 210px;
        flex-direction: column;
        border: 1px solid silver;
        border-radius: 4px;
        &:hover,
        &:focus  {
        outline: none;
        border: 1px solid gold;
        }
    }
    button {
        font-family: ${p=>p.theme.fonts.monospace}; 
        font-weight: ${p=>p.theme.fontWeights.heading};
        margin-left: auto;
        background-color: #fff;
        padding: 5px 10px;
        border: 1px solid silver;
        border-radius: 4px;
        &:hover,
        &:focus  {
        outline: none;
        border: 1px solid gold;
        }
  }
`

const RegPage = () => {

    const nameInpudId = nanoid();
    const emailInpudId = nanoid();
    const passwordInpudId = nanoid();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  
  const dispatch = useDispatch();

    const onInputChange = (event) => {
    switch (event.target.name) {
        case "name": setName(event.target.value);
            break;
        case "email": setEmail(event.target.value);
            break;
        case "password": setPassword(event.target.value);
            break;
        default: return;
    }
    }
    
    const handleSubmit = (event) => {
    event.preventDefault();
    
      dispatch(regThunk({name, email, password}));
      
    setName("");
    setEmail("");
    setPassword("");
  }

    return(
        <StyledForm onSubmit={handleSubmit}>

    <label htmlFor={nameInpudId}>Name </label>
    <input
      type="text"
      name="name"
      id={nameInpudId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={name}
      onChange={onInputChange}
      required
        />
            
    <label htmlFor={emailInpudId}>Email </label>
    <input
      type="email"
      name="email"
      id={emailInpudId}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      title="Email must have the following shape: email@email.com"
      value={email}
      onChange={onInputChange}
      required
        />
            
    <label htmlFor={passwordInpudId}>Password </label>    
    <input
      type="password"
          name="password"
          id={passwordInpudId}
          title="Password must be strong as teenager's erection!"
          value={password}
      onChange={onInputChange}
      required
        />

        <button type="submit">Sign Up</button>
        
    </StyledForm>)
}

export default RegPage;