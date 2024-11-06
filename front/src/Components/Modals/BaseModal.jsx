import React, { useEffect, Fragment } from 'react';
import { useStates } from '../../Hooks/useStates';
import { useKeyDown, useKeyUp } from '../../Hooks';
import styles from '/src/Components/Modals/styles/index.module.scss';


const ListenKeys = props => {
    const { keyExec } = props;
    // ---------------------------------------------   KEYBOARD EVENTS   --------------------------------------------- #
    useKeyDown(props.close, ['escape'], keyExec);
    useKeyUp(null, ['any'], keyExec);
    // ---------------------------------------------   /KEYBOARD EVENTS   --------------------------------------------- #

    return null;
}

const BaseModal = props => {
    const { s, f } = useStates();
    const keyExec = !!s.modals?.exampleBase?.example;
    const ztyle = props.zindex ? {zIndex: props.zindex} : {};

    const close = () => {
        f.u2('modals', 'exampleBase', 'example', false);
    }

    return (
        <>
        {keyExec && 
        <ListenKeys 
            keyExec={keyExec}
            close={close}
        />}
        <div
            className={`${styles.modal_info}`}
            style={{...ztyle}}
            onClick={close}
            >
            <div 
                className={`flex ${styles.modal_container} ${styles.modal_container_50} pb-5 pt-5 ${styles.my_modal}`}
                onClick={e => e.stopPropagation()}
                >
                Content Here
                <div className="flex flex-row flex-wrap justify-around">
                    And Here :3
                </div>
            </div>
        </div>
        </>
    )
}

export { BaseModal };