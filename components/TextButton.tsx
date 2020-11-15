import React from 'react';
import styled from 'styled-components';

interface TextButtonProps {
  text: string | undefined;
  onClick: () => void;
}

function TextButton({ text, onClick }: TextButtonProps) {
  return <Container onClick={onClick}>{text}</Container>;
}

export default TextButton;

const Container = styled.button`
  color: ${(props) => props.theme.colors.darkGray};
  text-decoration: underline;
  border: 0;
  background-color: transparent;
  outline: none;
`;
