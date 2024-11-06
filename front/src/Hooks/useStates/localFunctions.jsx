import { useDispatch, useSelector } from "react-redux";
import { lf as lff } from "./fs";
import { useF } from "./functions";

const useLf = props => {
    const ls = useSelector(state => state.fs.ls);
    const s = useSelector(state => state.fs.s);
    const d = useDispatch();
    const f = useF();

    const toggleTheme = () => {
        const theme = ls.theme === 'black' ? 'white' : 'black';
        u0('theme', theme);
        f.u0('loading', false);
        f.u2('modals', 'themes', 'changed', true);
    }

    // u[0-5]
    const u0 = (f0, value) => {
        d(lff.u0({f0, value}));
    }
    const u1 = (f0, f1, value) => {
        d(lff.u1({f0, f1, value}));
    }
    const u2 = (f0, f1, f2, value) => {
        d(lff.u2({f0, f1, f2, value}));
    }
    const u3 = (f0, f1, f2, f3, value) => {
        d(lff.u3({f0, f1, f2, f3, value}));
    }
    const u4 = (f0, f1, f2, f3, f4, value) => {
        d(lff.u4({f0, f1, f2, f3, f4, value}));
    }
    const u5 = (f0, f1, f2, f3, f4, f5, value) => {
        d(lff.u5({f0, f1, f2, f3, f4, f5, value}));
    }

    return { toggleTheme, u0, u1, u2, u3, u4, u5 };
}

export { useLf };