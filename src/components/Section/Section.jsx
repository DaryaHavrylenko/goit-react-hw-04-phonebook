import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section `
    font-family: ${p => p.theme.fonts.heading};
     display: flex;
    flex-direction: column;
         margin: 0 auto;

padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
padding-right: ${p => p.theme.space[4]}px;
padding-left: ${p => p.theme.space[4]}px;
`
const FormChildren = styled.div`
    display: flex;
    flex-direction: column;
`
const Caption = styled.h1`
    font-size: ${p => p.theme.fontSizes.xl};
`
export const Section = ({title, children}) => {
    return (
        <Wrapper>
            {title && <Caption>{title}</Caption>} 
            <FormChildren>{ children}</FormChildren>
    </Wrapper>
)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}