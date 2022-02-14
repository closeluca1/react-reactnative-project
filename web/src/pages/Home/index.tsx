import { Container, Title, Button, Image, LeftContainer, RightContainer, SubTitle, ButtonBox } from './styles';
import { Link } from 'react-router-dom';

export default function Home() {
  return(
    
    <Container>
      <LeftContainer>

        <Title>O mapa local de sua cidade</Title>
        <SubTitle>Entre no comércio local tudo que precisa</SubTitle>
        
        <Link to='/new'>
          <Button>
            <ButtonBox>
              {'>'}
            </ButtonBox>
            Cadastre um ponto comercial
          </Button>
        </Link>

      </LeftContainer>
      <RightContainer>
        <Image/>
      </RightContainer>
    </Container>
    
  )
}