import { useEffect } from 'react';
import { cambiarThema } from '../Core/helper';
import { Theme } from '../Components/Theme';

import { Index } from '../Pages/Index';
import { Test } from '../Pages/Test';
import { Route, Routes, Navigate } from 'react-router-dom';

import { store } from './store';
import { Provider } from "react-redux";
import { useStates } from '../Hooks/useStates';


const BgTheme = () => {
    const { ls } = useStates();
    return (
        <>
            <div className={`wipeInDown full-page-container bg-my-${ls.theme}`}></div>
            <Theme />
        </>
    )
}

function AppUI() {
    const { ls } = useStates();

    useEffect(() => {
        cambiarThema(ls?.theme);
    }, [ls?.theme]);

    return (
        <div className={`text-[var(--my-minor)]`}>
            <BgTheme />
            <Routes>
                {/* -----------   Index   ----------- */}
                <Route
                    path="/"
                    element={
                        <Index />
                    }
                />
                {/* -----------   /Index   ----------- */}
                {/* -----------   Test   ----------- */}
                <Route
                    path="test"
                    element={
                        <Test />
                    }
                />
                {/* -----------   /Test   ----------- */}

                {/* -----------   404   ----------- */}
                <Route path="*/" element={<div className='text-danger h1 text-center mt-5'>404 Not Found</div>} />
                {/* -----------   /404   ----------- */}

            </Routes>
        </div>
    );
}

function App(props) {
    return (
        <Provider store={store}>
            <AppUI />
        </Provider>
    );
}

export default App;
