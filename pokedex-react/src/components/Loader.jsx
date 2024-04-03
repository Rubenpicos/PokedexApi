import { squircle } from "ldrs";
//The loader styles&// Los estilosde la "pantalla" de carga.
export const Loaders = () => {
  squircle.register();

  return (
    <div className="container-loader">
      <l-squircle
        size={37}
        stroke={5}
        stroke-length={0.15}
        bg-opacity={0.1}
        speed={0.9}
        color="red"
      />
    </div>
  );
};
