import React from 'react';

function Separador(props) {
    /*
        bg = background

        bgmt = size margin top
        bglt = size line top
        bgst = size space top
        bglc = size line center
        bgsb = size space bottom
        bglb = size line bottom
        bgmb = size margin bottom

        smt = size margin top
        slt = size line top
        sst = size space top
        slc = size line center
        ssb = size space bottom
        slb = size line bottom
        smb = size margin bottom
        align = (start, center, end, between, around, evenly)
        width = width (1 - 12)
    */

    let bg = props.bg || '#0000';

    // const mt = `flex w-${props.wmt || 'full'} h-[${props.smt || 0}px] bg-[${props.bgmt || bg}]`;
    const mt = {width: `${(props.wmt || 100)}%`, height: `${(props.smt || 0)}px`, background: `${(props.bgmt || bg)}`};
    const lt = {width: `${(props.wlt || 100)}%`, height: `${(props.slt || 0)}px`, background: `${(props.bglt || bg)}`};
    const st = {width: `${(props.wst || 100)}%`, height: `${(props.sst || 0)}px`, background: `${(props.bgst || bg)}`};
    const lc = {width: `${(props.wlc || 100)}%`, height: `${(props.slc || 0)}px`, background: `${(props.bglc || bg)}`};
    const sb = {width: `${(props.wsb || 100)}%`, height: `${(props.ssb || 0)}px`, background: `${(props.bgsb || bg)}`};
    const lb = {width: `${(props.wlb || 100)}%`, height: `${(props.slb || 0)}px`, background: `${(props.bglb || bg)}`};
    const mb = {width: `${(props.wmb || 100)}%`, height: `${(props.smb || 0)}px`, background: `${(props.bgmb || bg)}`};

    const align = props.align || 'center';

    const cmt = `flex w-full justify-${props.amt || align} content-${props.amt || align} items-${props.amt || align} align-${props.amt || align}`
    const clt = `flex w-full justify-${props.alt || align} content-${props.alt || align} items-${props.alt || align} align-${props.alt || align}`
    const cst = `flex w-full justify-${props.ast || align} content-${props.ast || align} items-${props.ast || align} align-${props.ast || align}`
    const clc = `flex w-full justify-${props.alc || align} content-${props.alc || align} items-${props.alc || align} align-${props.alc || align}`
    const csb = `flex w-full justify-${props.asb || align} content-${props.asb || align} items-${props.asb || align} align-${props.asb || align}`
    const clb = `flex w-full justify-${props.alb || align} content-${props.alb || align} items-${props.alb || align} align-${props.alb || align}`
    const cmb = `flex w-full justify-${props.amb || align} content-${props.amb || align} items-${props.amb || align} align-${props.amb || align}`

    return (
        <div className='flex flex-col flex-wrap w-full justify-center items-center content-center align-center'>

            <div className={`${cmt}`}>
                <div style={mt}></div>
            </div>
            <div className={`${clt}`}>
                <div style={lt}></div>
            </div>
            <div className={`${cst}`}>
                <div style={st}></div>
            </div>
            <div className={`${clc}`}>
                <div style={lc}></div>
            </div>
            <div className={`${csb}`}>
                <div style={sb}></div>
            </div>
            <div className={`${clb}`}>
                <div style={lb}></div>
            </div>
            <div className={`${cmb}`}>
                <div style={mb}></div>
            </div>

        </div>
    )
}

export { Separador };