import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const FormPhonebook = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[2]}px;
  width: 400px;
  border: ${p => p.theme.borders.normal};
`;

const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.list};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
const Input = styled.input`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l};
  width: 200px;
  &:focus {
    outline: none;
    border: 2px solid;
    border-color: #47feff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
const Button = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  width: 100px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.md};
  &:hover {
    background-color: #b3f9f6;
    border-color: #b3f9f6;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const Form = ({ onSubmit }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [data, setData] = useState({ userName: '', number: '' });

  const handleChange = evt => {
    const { value, name } = evt.target;
    setData({ ...data, [name]: value });
  };
  const reset = () => {
    setData({ userName: '', number: '' });
  };

  const modelId = nanoid();
  const numberId = nanoid();

  return (
    <FormPhonebook
      autoComplete="off"
      onSubmit={evt => {
        evt.preventDefault();
        onSubmit(data.userName, data.number);
        reset();
      }}
    >
      <Label htmlFor={modelId}>Name</Label>
      <Input
        type="text"
        name="userName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={data.userName}
        id={modelId}
      />
      <Label htmlFor={numberId}>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={data.number}
        id={numberId}
      />
      <Button type="submit">Add contact</Button>
    </FormPhonebook>
  );
};
// };
