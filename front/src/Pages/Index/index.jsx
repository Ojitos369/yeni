import { useMemo } from 'react';
import { useStates } from '../../Hooks/useStates';
import { ModalThemeChanged } from '../../Components/Modals/ModalThemeChanged';

import './styles/index.module.css';
import { useEffect } from 'react';

const Index = props => {
    const { ls, lf, s, f } = useStates();
    const theme = useMemo(() => ls.theme, [ls.theme]);
    const modalChangeTheme = useMemo(() => !!s.modals?.themes?.changed, [s.modals?.themes?.changed]);

    useEffect(() => {
        f.app.helloWorld();
    }, []);
    return (
        <>
            <div className='flex flex-wrap justify-center'>
                <h2 className={`text-center w-1/3 mt-3 font-bold text-3xl ${theme === 'black' ? 'text-white' : 'text-black'} reflejo`}
                >
                    Actual theme: {theme}
                </h2>
            </div>
            {modalChangeTheme && <ModalThemeChanged />}
        </>
    )
}

export { Index };
