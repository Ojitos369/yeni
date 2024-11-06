import { useStates } from '../../Hooks/useStates';

const Test = props => {
    const { ls, lf, s, f } = useStates();
    return (
        <>
            Component to make tests
        </>
    )
}

export { Test };
