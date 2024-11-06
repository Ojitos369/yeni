import { useStates } from '../../Hooks/useStates';
import { GeneralModal } from './GeneralModal';

const ModalThemeChanged = props => {
    return (
        <GeneralModal
            Component={Content}
            lvl1="themes"
            lvl2="changed"
            {...props}
        />
    )
}

const Content = props => {
    const { ls } = useStates();
    return (
        <h3 className="text-center basis-full text-bold">
            Thema Cambiado a: {ls.theme}
        </h3>
    )
}

export { ModalThemeChanged };