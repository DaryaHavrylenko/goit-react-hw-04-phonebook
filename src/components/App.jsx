import React, { Component } from 'react';
import { Section } from './Section/Section';
import Form from './Form/Form';
import { ContactsWrapper } from './Contacts/ContactsWrapper';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid'
import { ThemeProvider } from 'styled-components';
import { theme } from './ThemeProvider/theme';


class App extends Component {
  state = {
    contacts: [],
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  
filter: ''
  }
  
  
  deleteContacts = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
  }

  // formSubmitHandler = (contact) => {
 //   contact = {
  //     id: nanoid(),
  //     ...contact
  //   }
 //   this.setState( ({ contacts }) => ({ contacts: [contact, ...contacts] })) 
  // }
    
formSubmitHandler = ({ name, number }) => {
    const normalizedFilter = name.toLowerCase();
    
    const checkByName = this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedFilter);
    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name, number,
        completed: false,
      };
    
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    };
  }

  changeFilter = (e) => {
this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    }
    

}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


render() {
  const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();

    return (
      
      <>
        <ThemeProvider theme={theme}>
          <Section title='Phonebook'>
         <Form onSubmit={this.formSubmitHandler}></Form>
        </Section>
       
        <ContactsWrapper title='Contacts' >
           <Filter value={filter} onChange={this.changeFilter}></Filter>            
 
          <Contacts contacts={visibleContacts} onDeleteContacts={this.deleteContacts}></Contacts>
        </ContactsWrapper>
        </ThemeProvider>
    
      </>
  
  );
} 

  }
export default App;