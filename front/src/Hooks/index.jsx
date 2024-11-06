import { useEffect, useMemo } from 'react';
import { useStates } from './useStates';


const useKeyDown = (callback, keys, keyExec, extras) => {
    const element = document;
    const { s, f } = useStates();
    const functionBlocked = useMemo(() => s.shortCuts?.functionBlocked || false, [s.shortCuts?.functionBlocked]);
    const press = extras?.press || [];
    const onKeyDown = (event) => {
        if (!keyExec || functionBlocked) return;
        const s_keys = s.shortCuts?.keys || {};
        const evKey = event?.key?.toLowerCase();
        const evCode = event?.code?.toLowerCase();
        const evKeyCode = event?.keyCode;
        const valids = [evKey, evCode, evKeyCode];
        const actualKeys = Object.keys(s_keys);
        if (!(keys.some(key => press.includes(key.toLowerCase())))) {
            if (actualKeys.includes(evKey)) return;
        }

        const wasAnyKeyPressed = keys.some((key) => valids.includes(key.toLowerCase()));
        if (wasAnyKeyPressed) {
            let keys = {
                ...s_keys,
                [evKey]: true,
            }
            f.u1('shortCuts', 'keys', keys);
            if (!!callback) callback(event);
        }
    };
    useEffect(() => { 
        if (!keyExec) return;
        element.addEventListener('keydown', onKeyDown);
        return () => {
            element.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, keyExec]);
};

const useKeyUp = (callback, keys, keyExec, extras) => {
    const element = document;
    const { s, f } = useStates();
    const functionBlocked = useMemo(() => s.shortCuts?.functionBlocked || false, [s.shortCuts?.functionBlocked]);
    const onKeyUp = (event) => {
        if (!keyExec || functionBlocked) return;
        const s_keys = s.shortCuts?.keys || {};
        const evKey = event?.key?.toLowerCase();
        const evCode = event?.code?.toLowerCase();
        const evKeyCode = event?.keyCode;
        const valids = [evKey, evCode, evKeyCode];
        const wasAnyKeyPressed = keys.some((key) => valids.includes(key.toLowerCase())) || keys.includes('any');
        if (wasAnyKeyPressed) {
            // event.preventDefault();
            let keys = {
                ...s_keys,
            }
            delete keys[evKey];
            f.u1('shortCuts', 'keys', keys);
            if (!!callback) callback(event);
        }
    };
    useEffect(() => { 
        if (!keyExec) return;
        element.addEventListener('keyup', onKeyUp);
        return () => {
            element.removeEventListener('keyup', onKeyUp);
        };
    }, [onKeyUp, keyExec]);
};

const useLocalTab = (modalItem, modalRef, autoFocus=true) => {
    const { s, f } = useStates();
    useEffect(() => { 
        if (!modalItem) return;

        const handleKeyDown = (e) => {
            if (!modalRef.current) return;
            if (e.key === 'Tab') {
                const focusableElements = modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (focusableElements.length === 0) {
                    e.preventDefault();
                    return;
                };

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault()
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault()
                    firstElement.focus();
                }
            }
        };
        // focus first element if focus not in modal
        if ((document.activeElement !== modalRef.current) && autoFocus) {
            const firstElement = modalRef.current.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            (firstElement?.focus && firstElement?.focus());
            (firstElement?.select && firstElement?.select());
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalItem, modalRef]);
}

const useSelectListaRefresh = props => {
    const { elegido, lista, actualizador, getDataFunc } = props;
    // console.log('useSelectListaRefresh', props);

    const getData = useMemo(ele => getDataFunc || (ele => {
        let ele_id, mode, index, new_ele;
        if (!!ele?.ele?.id) {
            ele_id = ele?.ele?.id;
            mode = 'ele';
            index = ele?.index;
        }
        else if (!!ele?.id) {
            ele_id = ele?.id;
            mode = 'id';
        }
        new_ele = lista.filter(e => {
            return e.id == ele_id;
        });
        new_ele = new_ele[0] || null;
        if (mode === 'ele' && !!new_ele) {
            new_ele = {ele: new_ele, index: index};
        }
        return new_ele;
    }), [getDataFunc]);

    useEffect(() => { 
        const params = Object.keys(elegido || {});
        if (lista.length > 0 && params.length > 0) {
            const new_ele = getData(elegido);
            // console.log(props.show_extra, lista, elegido, new_ele);
            actualizador(new_ele);
        }
        else {
            // console.log(props.show_extra, lista, elegido, null);
            actualizador(null);
        }
    }, [lista]);
}

export { 
    useKeyDown, 
    useKeyUp, 
    useLocalTab, 
    useSelectListaRefresh, 
};