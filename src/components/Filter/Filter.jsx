import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  display: flex;
  flex-direction: column;
  width: 300px;
  font-weight: ${p => p.theme.fontWeights.list};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
const Input = styled.input`
   margin-bottom: ${p => p.theme.space[3]}px;
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
`
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Label>Find contacts by name</Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
