interface AuthInputProps {
  label: string;
  value: any;
  tipo?: "text" | "email" | "password";
  obrigatorio?: boolean;
  naoRenderizarQuando?: boolean;
  valorMudou: (novoValor: any) => any;
}

export default function AuthInput(prosp: AuthInputProps) {
  return prosp.naoRenderizarQuando ? null : (
    <div className="flex flex-col mt-4">
      <label htmlFor="">{prosp.label} </label>
      <input
        className={`
            px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
            focus:border-blue-500 focus:bg-white
            focus:outline-none
        `}
        type={prosp.tipo ?? "text"}
        value={prosp.value}
        onChange={(e) => prosp.valorMudou(e.target.value)}
        required={prosp.obrigatorio}
      />
    </div>
  );
}
