import { HeaderContainer, List } from "./styles";
import AvatarStayCrazy from "@/assets/avatar-stay-crazy.svg";
import Image from "next/image";
import { Button } from "../Button/styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={AvatarStayCrazy} alt="StayCrazy" />
      <List>
        <li>Home</li>
        <li>Quem somos</li>
        <li>Serviços</li>
        <li>Contato</li>
      </List>
      <Button.Primary>Contato</Button.Primary>
    </HeaderContainer>
  );
}
