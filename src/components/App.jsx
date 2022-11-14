import { useState, useEffect, useRef } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactsWrapper } from './Contacts/ContactsWrapper';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { theme } from './ThemeProvider/theme';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const App = () => {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filterName, setFilterName] = useState('');
  const isFirstRender = useRef(true);

  const handleSubmit = (name, number) => {
    const allTheName = contacts.map(elem => elem.name.toUpperCase());
    if (allTheName.includes(name.toUpperCase())) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => {
        const newContact = {
          name,
          number,
          id: `id-${nanoid()}`,
        };
        return [...prevState, newContact];
      });
    }
  };

  const deleteContacts = contactId => {
    setContacts(() => ({
      newContacts: contacts.filter(el => el.id !== contactId),
    }));
  };

  const changeFilter = e => {
    const { value } = e.target;
    setFilterName(value);
  };

  const getVisibleContacts = () => {
    const newContacts = contacts.filter(({ name }) =>
      name.toUpperCase().includes(filterName.toUpperCase().trim())
    );

    return newContacts;
  };

  const visibleContacts = getVisibleContacts();

  useEffect(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (savedContacts?.length) {
      setContacts([...savedContacts]);
    }
  }, []);
  useEffect(() => {
    if (!isFirstRender.current) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    isFirstRender.current = false;
  }, [contacts]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Section title="Phonebook">
          <Form onSubmit={handleSubmit} />
        </Section>

        <ContactsWrapper title="Contacts">
          <Filter value={filterName} onChange={changeFilter}></Filter>

          <Contacts
            contacts={visibleContacts}
            onDeleteContacts={deleteContacts}
          ></Contacts>
        </ContactsWrapper>
      </ThemeProvider>
    </>
  );
};
