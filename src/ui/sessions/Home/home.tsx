import Header from "../../components/Header/Header";
import ComponentHome from "../../components/Home/Home";
import { ContainerHome } from "./styles";

export default function SessionHome() {
  return (
    <ContainerHome>
      <Header />
      <ComponentHome />
    </ContainerHome>
  );
}
