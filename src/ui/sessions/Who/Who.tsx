import { Container, Content, DivImage, Images, Text, Title } from "./styles";

export default function SessionWho() {
  return (
    <Container>
      <Title>
        <span />
        <h2>Quem somos?</h2>
      </Title>
      <Content>
        <Text>
          <p>
            A <span> Stay Crazy </span> é uma empresa altamente especializada na
            organização e execução de todos os tipos de eventos, sempre focada
            em levar mais entretenimento e alegria para suas festas e
            celebrações.
          </p>
          <p>
            Nosso diferencial é a capacidade de nos adaptarmos às necessidades e
            desejos de cada um de nossos clientes. Nossa missão é surpreender e
            encantar, oferecendo serviços inovadores que superam as
            expectativas. Trabalhamos com dedicação para garantir que cada
            evento seja único e memorável, <span> proporcionando momentos inesquecíveis </span>
            que ficam na memória de todos os convidados.
          </p>
          <p>
            Com uma equipe talentosa e criativa, a Stay Crazy se compromete a
            <span> transformar suas ideias em realidade </span>, cuidando de cada detalhe para
            que você possa aproveitar ao máximo sua festa. Seja um casamento,
            uma festa de aniversário, uma confraternização ou um evento
            corporativo, estamos prontos para criar experiências extraordinárias
            que refletirão a sua personalidade e estilo. Junte-se a nós e faça
            do seu próximo evento uma celebração incrível!
          </p>
        </Text>
        <Images>
          <DivImage>
            <span />
          </DivImage>
          <DivImage>
            <span />
          </DivImage>
        </Images>
      </Content>
    </Container>
  );
}
