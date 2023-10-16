import Layout from "@/components/template/Layout";
import { AppConsumer } from "@/data/context/AppContext";
import useAppData from "@/data/hook/useAppData";

export default function Notificacoes() {
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar as suas notificações"
    >
      Notificacao
    </Layout>
  );
}
