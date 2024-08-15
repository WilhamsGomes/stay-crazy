import { Button } from "../Button/styles";
import { Container, ContentText, ContentView } from "./styles";
import Image from "next/image";
import BannerHome from "@/assets/home.png";

export default function ComponentHome() {
  return (
    <Container>
      <ContentText>
        <span>Stay Crazy</span>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{" "}
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div>
          <Button.Primary>Entrar em contato</Button.Primary>
          <Button.Primary>Saiba mais</Button.Primary>
        </div>
      </ContentText>
      <ContentView>
        <Image src={BannerHome} alt="Stay Crazy"/>
      </ContentView>
    </Container>
  );
}
