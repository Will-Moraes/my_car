import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BorderlessButtonProps} from 'react-native-gesture-handler';
import {useTheme} from 'styled-components';

import {Container} from './styles';

interface Props extends BorderlessButtonProps {
  color: string;
}

export function BackButton({color, ...rest}: Props) {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <Icon
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
