import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeartSmile from '../../assets/HeartSmile.png';

import NavButton from '../../components/NavButton';

import {
  Container,
  MainTitle,
  SecondaryTitle,
  StepInfo,
  CardImage,
  LineItens,
  StepText,
  CardInfoWhite,
} from './styles';

// interface InfoMessages {
//   description: string;
//   step: number;
//   imageSide: string;
// }

const IwantToDonate: React.FC = () => {
  const navigation = useNavigation();
  const infoMessages = [
    {
      description: 'Lorem Ipson',
      step: 1,
      imageSide: 'right',
    },
    {
      description: 'Juao Ipson',
      step: 2,
      imageSide: 'left',
    },
    {
      description: 'Juao asdsa',
      step: 3,
      imageSide: 'right',
    },
    {
      description: 'Juao sss',
      step: 4,
      imageSide: 'left',
    },
    {
      description: 'Juao dddd',
      step: 5,
      imageSide: 'right',
    },
  ];

  const renderLine = ({ item }: any) => {
    const card = (
      <CardInfoWhite key={item.description}>{item.description}</CardInfoWhite>
    );

    const stepInfo = (
      <StepInfo key={item.step}>
        <StepText key={item.step}>{item.step} º passo</StepText>
      </StepInfo>
    );

    return (
      <>
        <LineItens key={item.description}>
          {item.step % 2 === 0 ? [stepInfo, card] : [card, stepInfo]}
        </LineItens>
      </>
    );
  };
  return (
    <>
      <Container>
        <MainTitle>Algúem deve estar sorrindo!</MainTitle>
        <StepInfo>
          <CardImage source={HeartSmile} />
        </StepInfo>
        <SecondaryTitle>Veja só como é fácil ser doador</SecondaryTitle>
        <FlatList
          data={infoMessages}
          renderItem={renderLine}
          keyExtractor={(item) => item.description}
        />
      </Container>
      <NavButton onPress={() => navigation.navigate('LetYourContact')}>
        Deixe seu contato
      </NavButton>
    </>
  );
};

export default IwantToDonate;
