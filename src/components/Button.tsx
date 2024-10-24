import styled from '@emotion/native';
import { FC } from 'react';

const ButtonContainer = styled.TouchableOpacity`
  background-color: #9b59b6;
  border-radius: 15px;
  padding: 15px 40px;
  justify-content: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;

type Props = {
  title: string;
  onPress: () => void;
};

const Button: FC<Props> = ({ title, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
