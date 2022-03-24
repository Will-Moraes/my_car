import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueContent,
  DateValue,
  Content,
  Footer,
} from './styles';

import {useTheme} from 'styled-components';
import {BackButton} from '../../components/BackButton';
import {Calendar} from '../../components/Calendar';

import ArrowSvg from '../../assets/arrow.svg';
import {Button} from '../../components/Button';

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValueContent selected={false}>
              <DateValue />
            </DateValueContent>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValueContent selected={false}>
              <DateValue />
            </DateValueContent>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
