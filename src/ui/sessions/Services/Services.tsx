import Image from "next/image";
import { Container, Content, DivImage, Images, Text, Title } from "./styles";
import baile from "@/assets/bebida.jpeg";

export default function SessionServices() {
  return (
    <Container>
      <Title>
        <span />
        <h2>Serviços</h2>
      </Title>
      <Content>
        <Text>
          <p>
            Transforme sua festa em um evento inesquecível com a <span> Stay Crazy! </span>
            Nossa equipe é apaixonada por proporcionar momentos mágicos e cheios
            de energia para você e seus convidados. Com um atendimento
            excepcional e personalizado, garantimos que cada pessoa se sinta
            especial e à vontade, criando um ambiente acolhedor e divertido.
          </p>
          <p>
            A Stay Crazy não apenas anima a pista de dança, mas a <span> transforma em
            um verdadeiro espetáculo!</span> Abrimos a festa com estilo, elevando a
            atmosfera com músicas contagiantes e interações dinâmicas que fazem
            todos se soltarem e se divertirem até o último minuto. Venha viver
            essa experiência única e deixe-nos fazer da sua celebração um
            momento memorável, onde a alegria e a descontração serão
            protagonistas. Prepare-se para dançar, rir e criar lembranças que
            ficarão para sempre em seu coração!
          </p>
        </Text>
        <Images>
          <DivImage>
            <Image src={baile} alt="baile" width={650} />
          </DivImage>
        </Images>
      </Content>
    </Container>
  );
}
