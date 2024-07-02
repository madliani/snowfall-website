import { ReactNode, useCallback } from "react";
import { Particles } from "react-particles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadSnowPreset } from "tsparticles-preset-snow";
import { Header } from "../components/Header";

type Properties = {
    children: ReactNode;
};

const options: ISourceOptions = {
    detectRetina: true,
    fpsLimit: 120,
    preset: "snow"
};

export const Layout = ({ children }: Properties) => {
    const init = useCallback(async (engine: Engine) => {
        await loadSnowPreset(engine);
    }, []);

    return (
        <>
            <Particles init={init} options={options} />
            <Header />
            <main>{children}</main>
        </>
    );
};
