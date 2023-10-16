import Layout from "@/components/template/Layout";
import { AppConsumer } from "@/data/context/AppContext";
import useAppData from "@/data/hook/useAppData";

export default function Perfil() {
  return (
    <Layout
      titulo="Perfil do usuário"
      subtitulo="Administre as suas informações do usuário"
    >
      Perfíl do usuário
    </Layout>
  );
}
