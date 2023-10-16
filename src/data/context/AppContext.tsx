import { createContext, useEffect, useState } from "react";

type Tema = "dark" | "";

interface AppContextProps {
  tema?: Tema;
  alternarTema?: () => void;
}
const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [tema, setTema] = useState<Tema>("dark");

  function alternarTema() {
    const novoTema = tema === "" ? "dark" : "";
    setTema(novoTema);
    localStorage.setItem("tema", novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema") as Tema;
    setTema(temaSalvo);
  }, []);

  return (
    <AppContext.Provider value={{ tema: tema, alternarTema }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

export const AppConsumer = AppContext.Consumer;
