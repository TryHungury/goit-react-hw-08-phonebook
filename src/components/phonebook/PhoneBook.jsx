import { Box } from "components/box/Box"
import styled from "styled-components"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "nanoid";
// import { contactsListAction } from "redux/contacts/contacts.slice";
import { addContactsThunk } from "redux/contacts/contacts.thunk";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  background-color: ${p=>p.theme.colors.text};
  color: ${p=>p.theme.colors.accent};
  padding: ${p=>p.theme.space[3]}px;
  margin-top: ${p=>p.theme.space[3]}px; 
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.heading};
  font-size: ${p=>p.theme.fontSizes[5]}px;
`

const NameInput = styled.input`
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  padding: ${p=>p.theme.space[4]}px;
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.body};
  font-size: ${p=>p.theme.fontSizes[4]}px;
`

const TelInput = styled.input`
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  padding: ${p=>p.theme.space[4]}px;
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.body};
  font-size: ${p=>p.theme.fontSizes[4]}px;
`

const AddContactBtn = styled.button`
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  background-color: ${p=>p.theme.colors.text};
  color: ${p=>p.theme.colors.accent};
  padding: ${p=>p.theme.space[4]}px;
  margin-top: ${p=>p.theme.space[3]}px; 
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.body};
  font-size: ${p=>p.theme.fontSizes[4]}px;
  cursor: pointer;
  transition: background-color linear 500ms,
  color linear 500ms;
  
  &:hover, &:focus {
    background-color: ${p=>p.theme.colors.accent};
    color: ${p=>p.theme.colors.text};
  }
  `
export const PhoneBook = () => {
  const [state, setState] = useState({
    name: "",
    phone: "",
  })

  const contacts = useSelector(state => state.contacts)

  const {name, phone} = state;

  const dispatch =  useDispatch()

  const reset = () => {

    setState({name: "", phone: ""})
  }

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

      return setState((prev)=>({...prev, [inputName]: inputValue}))
    }

    const addNewContact = (e) => {
      e.preventDefault();
      let count = 0;

      contacts.items.map((contact)=>{

       if (contact.name === name) {

        return count += 1;
      }
      
      return count
      })
  
      if (count === 0) {
        const contact = {
          // id: nanoid(),
          name,
          phone,
        }
    
        // dispatch(contactsListAction(contact))
        dispatch(addContactsThunk(contact))
      } else {
        return alert('This contact is already in your phone book...')
      }
      reset()
    }

  return <Box onSubmit={addNewContact} display="flex" flexWrap="wrap" width="650px" justifyContent="space-evenly" alignItems="start" mt="3" as={"form"}>
      <Label>Name
      <NameInput
          placeholder="pls input your name..."
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}>
      </NameInput>
      </Label>
      <Label>Number
      <TelInput
          placeholder="pls input your number..."
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleChange}>
      </TelInput>
      </Label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
  </Box>
}