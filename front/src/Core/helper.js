const cambiarThema = thema => {
    const minor = thema === 'black' ? '#ffffff' : '#212121';
    const major = thema === 'black' ? '#212121' : '#ffffff';
    document.documentElement.style.setProperty('--my-minor', minor);
    document.documentElement.style.setProperty('--my-major', major);
    return 
}

const getFloatCurrency = (text) => {
    const value = text.replace(/[^0-9.-]+/g, '');
    return parseFloat(value);
}

const showCurrency = (value, decimals) => {
    decimals = decimals || 2;
    // separe with commas
    value = parseFloat(value || 0);
    value = value.toFixed(decimals);
    // value = Math.round(value * 10000000) / 10000000;


    let negativo = false;
    let valueString = value.toString();
    if (valueString[0] === '-') {
        negativo = true;
        valueString = valueString.slice(1);
    }

    const decimal = valueString.split('.')[1] || '';
    const integer = valueString.split('.')[0];
    const integerArray = integer.split('').reverse();
    let integerArrayWithCommas = '';
    for (let i = 0; i < integerArray.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            integerArrayWithCommas += ',';
        }
        integerArrayWithCommas += integerArray[i];
    }
    let new_string = integerArrayWithCommas.split('').reverse().join('') + (decimal ? '.' + decimal : '.00');
    
    if (new_string[new_string.length - 1] === ',') {
        new_string = new_string.slice(0, -1);
    }
    if (new_string[0] === ',') {
        new_string = new_string.slice(1);
    }
    
    return '$ ' + (negativo ? '-' : '') + new_string;
}

const showDate = (date, showTime) => {
    if (!date) {
        return '';
    }
    // console.log(date)
    date = date.toString()
    const sep = date.includes('T') ? date.split('T') : date.split(' ');
    // [0].split('-').reverse().join('/');
    let fecha = sep[0].split('-').reverse().join('/');
    if (showTime || showTime === undefined || showTime === null) {
        let hora = sep.length > 1 ? sep[1].split('.')[0] : '';
        return fecha + ' ' + hora;
    } else {
        return fecha;
    }
}

const showNumber = (value, decimals) => {
    decimals = decimals || 3;
    // separe with commas
    value = parseFloat(value || 0);
    value = value.toFixed(decimals);
    // value = Math.round(value * 10000000) / 10000000;


    let negativo = false;
    let valueString = value.toString();
    if (valueString[0] === '-') {
        negativo = true;
        valueString = valueString.slice(1);
    }

    let decimal = valueString.split('.')[1] || '';
    decimal = parseInt(decimal) > 0 ? decimal : '';
    const integer = valueString.split('.')[0];
    const integerArray = integer.split('').reverse();
    let integerArrayWithCommas = '';
    for (let i = 0; i < integerArray.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            integerArrayWithCommas += ',';
        }
        integerArrayWithCommas += integerArray[i];
    }
    let new_string = integerArrayWithCommas.split('').reverse().join('') + (decimal ? '.' + decimal : '');
    
    if (new_string[new_string.length - 1] === ',') {
        new_string = new_string.slice(0, -1);
    }
    if (new_string[0] === ',') {
        new_string = new_string.slice(1);
    }
    
    return (negativo ? '-' : '') + new_string;
}

const getHoy = () => {
    let date = new Date();
    date.setHours(date.getHours() - 6);
    date = date.toISOString().split('T')[0];
    return date;
}

const selectArrowUp = props => {
    const elegido = props.elegido;
    const itemHeight = props.itemHeight;
    const myLista = props.myLista || [];
    const containerId = props.containerId;
    const inputId = props.inputId;
    const mode = props.mode || 'ele';

    let index = elegido?.index ?? -1;
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    if (!!container) {container.scrollTop -= itemHeight;}
    
    if (myLista.length > 0) {
        let data = null;
        let new_index = (index - 1);
        // if (new_index < -1) {
        if (new_index < 0) {
            new_index = myLista.length - 1;
        }
        data = {index: new_index};
        data[mode] = myLista[new_index] || null;

        props.actualizador(data);
        if (index === -1) {
            container.scrollTop = (myLista.length * itemHeight);
        } 
        // else if (new_index === -1) {
        //     if (!!input) {
        //         input.focus();
        //         input.select();
        //     }
        // }
        if (!!input) {
            input.focus();
        }
    }
}

const selectArrowDown = props => {
    const elegido = props.elegido;
    const itemHeight = props.itemHeight;
    const myLista = props.myLista ||[];
    const containerId = props.containerId;
    const inputId = props.inputId;
    const mode = props.mode || 'ele';

    let index = elegido?.index ?? -1;
    const container = document.getElementById(containerId);
    const input = document.getElementById(inputId);
    if (!!container) {container.scrollTop += itemHeight;}
    
    if (myLista.length > 0) {
        let data = null;
        let new_index = (index + 1);
        if (new_index >= myLista.length) {
            // new_index = -1;
            new_index = 0;
            // if (!!input) {
            //     input.focus();
            //     input.select();
            // }
        }
        if (!!input) {
            input.focus();
        }
        data = {index: new_index};
        data[mode] = myLista[new_index] || null;
        props.actualizador(data);
        if (data.ele === null) {
            container.scrollTop = 0;
        }
    }
}

const selectEnter = props => {
    const myLista = props.myLista || [];
    const mode = props.mode || 'ele';
    const data = {index: 0};
    data[mode] = myLista[0] || null;
    props.actualizador(data);
}

const selectNull = props => {
    const mode = props.mode || 'ele';
    const data = {index: -1};
    data[mode] = null;
    props.actualizador(data);
}


export {
    cambiarThema,
    getFloatCurrency,
    showCurrency,
    showDate,
    showNumber,
    getHoy,
    selectArrowUp,
    selectArrowDown,
    selectEnter,
    selectNull,
};