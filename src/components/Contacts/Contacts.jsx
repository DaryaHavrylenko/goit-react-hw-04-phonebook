import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: square;
`
const Item = styled.li`
   display: flex; 
   align-items: baseline;
`
const Text = styled.p`
        font-size: ${p => p.theme.fontSizes.l};
         font-weight: ${p => p.theme.fontWeights.list};
         text-transform: capitalize;
      
`
const Button = styled.button`
text-align: center;
    width: 100px;
    height: 30px;
    margin-left: ${p => p.theme.space[4]}px;
        padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  &:hover {
    background-color: #b3f9f6;
    border-color: #b3f9f6;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`

export const Contacts = ({ contacts, onDeleteContacts }) => {
    return (
          <List>{contacts.map(({ id, name, number }) => <Item key={id}><Text>{name}: {number}</Text><Button onClick={() => onDeleteContacts(id)}>Delete</Button></Item>)}</List>
        )
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContacts: PropTypes.func.isRequired,
}