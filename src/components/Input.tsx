import styled from '@emotion/native';
import { FC } from 'react';

type StyledInputProps = {
  borderColor: string;
};

const StyledInput = styled.TextInput<StyledInputProps>`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: ${(props) => props.borderColor};
  font-size: 24px;
`;

type Props = {
  borderColor: string;
};

const Input: FC<Props> = ({ borderColor }) => {
  return (
    <StyledInput
      placeholder="Type something..."
      placeholderTextColor={borderColor}
      borderColor={borderColor}
    />
  );
};

export default Input;
