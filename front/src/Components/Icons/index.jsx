import { useEffect } from 'react';
import simple from './styles/simple.module.scss';
import dobles from './styles/dobles.module.scss';
import animated from './styles/animated.module.scss';

// -----------------------------------   BASES   ----------------------------------- //
const GeneralSimple = props => {
    const { name, d } = props;
    const icon = props.icon || '';
    const primary = props.primary || props.class1 || '';
    const fillPrimary = props.fillPrimary || props.fill1 || '';
    const className = props.className || `icon ${icon || simple[`${name}`]}` || '';
    const classPrimary = props.classPrimary || primary || (!fillPrimary && simple[`primary`]) || '';
    const style = props.style || {};
    const stylePrimary = props.stylePrimary || props.style1 || {};

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
            style={style}
            viewBox="0 0 576 512">
            <path 
                className={classPrimary}
                fill={fillPrimary}
                style={stylePrimary}
                d={d}
                />
        </svg>
    )
}
const GeneralDoble = props => {
    const { name, d1, d2 } = props;
    
    const icon = props.icon || '';
    const primary = props.primary || props.class1 || '';
    const secondary = props.secondary || props.class2 || '';
    const fillPrimary = props.fillPrimary || props.fill1 || '';
    const fillSecondary = props.fillSecondary || props.fill2 || '';
    const className = props.className || `icon ${icon || dobles[`${name}`]}` || '';
    const classPrimary = props.classPrimary || primary || (!fillPrimary && dobles[`primary`]) || '';
    const classSecondary = props.classSecondary || secondary || (!fillSecondary && dobles[`secondary`]) || '';
    const style = props.style || {};
    const stylePrimary = props.stylePrimary || props.style1 || {};
    const styleSecondary = props.styleSecondary || props.style2 || {};

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
            style={style}
            viewBox="0 0 576 512">
            <path 
                className={classPrimary}
                fill={fillPrimary}
                style={stylePrimary}
                d={d1}
                />
            <path 
                className={classSecondary}
                fill={fillSecondary}
                style={styleSecondary}
                d={d2}
                />
        </svg>
    )
}


// -----------------------------------   ANIMATED   ----------------------------------- //
const AnimateEdit = props => {
    const text = props.text || 'Editar';

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--animate-edit-text', `'${text}'`);

    }, [text]);
    return (
        <button 
            className={`${animated.animate_icon} ${animated.edit_button}`}
            >
            <svg 
                className={`${animated.animate_svgIcon}`}
                viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
            </svg>
        </button>
    )
}
const AnimateRemove = props => {
    const text = props.text || 'Eliminar';

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--animate-remove-text', `'${text}'`);
    }, [text]);
    return (
        <button 
            className={`${animated.animate_icon} ${animated.remove_button}`}
            >
            <svg 
                className={`${animated.animate_svgIcon}`}
                viewBox="0 0 512 512">
                <path d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zM143 239c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
            </svg>
        </button>
    )
}


// -----------------------------------   SIMPLE   ----------------------------------- //
const Play = props => {
    const name = 'play';
    const d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    return (
        <GeneralSimple
            name={name}
            d={d}
            {...props}
            />
    )
}
const Pause = props => {
    const name = 'pause';
    const d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
    return (
        <GeneralSimple
            name={name}
            d={d}
            {...props}
            />
    )
}


// -----------------------------------   DOBLE   ----------------------------------- //
const Sun = props => {
    const name = 'sun';
    const d1="M639.1 416C639.1 468.1 596.1 512 543.1 512H271.1c-53 0-96-43-96-95.99c0-50.62 39.25-91.62 88.88-95.37C264.7 317.8 263.1 315 263.1 312c0-61.86 50.25-111.1 112-111.1c45.38 0 84.25 27.13 101.9 65.1c9.876-6.249 21.5-9.999 34.13-9.999c35.25 0 63.1 28.63 63.1 64c0 1.875-.6203 3.619-.7453 5.619C612.7 338.6 639.1 373.9 639.1 416z"
    const d2="M144.7 303c-43.63-43.74-43.63-114.7 0-158.3c43.75-43.62 114.8-43.62 158.5 0c9.626 9.748 16.88 20.1 22.25 32.74c9.75-3.749 20.13-5.999 30.75-7.499l29.75-88.86c4-11.87-7.25-23.12-19.25-19.25L278.1 91.2L237.5 8.342c-5.5-11.12-21.5-11.12-27.13 0L168.1 91.2L81.1 61.83C69.22 57.96 57.97 69.21 61.85 81.08l29.38 87.73L8.344 210.3c-11.13 5.624-11.13 21.5 0 27.12l82.88 41.37l-29.38 87.86c-4 11.87 7.375 22.1 19.25 19.12l76.13-25.25c6-12.37 14-23.75 23.5-33.49C167.7 321.7 155.4 313.7 144.7 303zM139.1 223.8c0 40.87 29.25 74.86 67.88 82.36c8-4.749 16.38-8.873 25.25-11.75C238.5 250.2 264.1 211.9 300.5 189.4C287.2 160.3 257.1 139.9 223.1 139.9C177.7 139.9 139.1 177.6 139.1 223.8z"
    return (
        <GeneralDoble
            name={name}
            d1={d1}
            d2={d2}
            {...props}
            />
    )
}
const Moon = props => {
    const name = 'moon';
    const d1="M415.1 431.1C415.1 476.2 380.2 512 335.1 512H95.99c-52.1 0-95.1-43-95.1-96c0-41.88 27.13-77.25 64.62-90.25c-.125-2-.6279-3.687-.6279-5.687c0-53 43-96.06 96-96.06c36.25 0 67.37 20.25 83.75 49.88c11.5-11 27-17.87 44.25-17.87c35.25 0 63.1 28.75 63.1 64c0 12-3.5 23.13-9.25 32.75C383.7 356.2 415.1 390.1 415.1 431.1z"
    const d2="M565.2 298.4c-92.1 17.75-178.5-53.62-178.5-147.6c0-54.25 29-104 76.12-130.9c7.375-4.125 5.375-15.12-2.75-16.63C448.4 1.125 436.7 0 424.1 0c-105.9 0-191.9 85.88-191.9 192c0 8.5 .6251 16.75 1.75 25c5.875 4.25 11.62 8.875 16.75 14.25C262.1 226.5 275.2 224 287.1 224c52.87 0 95.1 43.13 95.1 96c0 3.625-.25 7.25-.625 10.75c23.62 10.75 42.37 29.5 53.5 52.5c54.37-3.375 103.7-29.25 137.1-70.37C579.2 306.4 573.5 296.8 565.2 298.4z"
    return (
        <GeneralDoble
            name={name}
            d1={d1}
            d2={d2}
            {...props}
            />
    )
}

export { 
    AnimateEdit,
    AnimateRemove,
    Play,
    Pause,
    Sun,
    Moon,
 };