import styled from '@emotion/native';

const StyledINput = styled.TextInput`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: #3498db;
  font-size: 24px;
`;

const Input = () => {
  return (
    <StyledINput
      placeholder="Type something..."
      placeholderTextColor="#3498db"
    />
  );
};

export default Input;
