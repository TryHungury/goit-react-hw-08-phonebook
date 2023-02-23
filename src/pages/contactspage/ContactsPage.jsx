import { Box } from 'components/box/Box';
import { Contacts } from 'components/contacts/Contacts';
import { PhoneBook } from 'components/phonebook/PhoneBook';
import styled from "styled-components";

const TitleH2 = styled.h2`
    text-align: center;
    border-radius: ${p=>p.theme.radii.normal};
    background-color: ${p=>p.theme.colors.accent};
    margin: ${p=>p.theme.space[0]}px auto;
    padding: ${p=>p.theme.space[2]}px;
    margin-top: ${p=>p.theme.space[5]}px; 
    font-weight: ${p=>p.theme.fontWeights.heading};
    font-family: ${p=>p.theme.fonts.heading};
`

export const ContactsPage = () => {
    return (
        <>
        <Box display="flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" as={"section"}>
          <TitleH2>Add contact in to Phonebook</TitleH2>
          <PhoneBook></PhoneBook>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" as={"section"}>
          <TitleH2>Contacts</TitleH2>
          <Contacts></Contacts>
        </Box>
        </>
    );
  }