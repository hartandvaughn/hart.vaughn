/**
 * debounce
 * Prevents A Function From Firing More Than Once When It's Called Multiple Times Within A Specified Amount Of Time. The Function Will Only Execute The Last Time The Function Is Called Within The Specified Amount Of Time
 * @param {*} fn 
 * @param {*} ms 
 * @returns 
 */
 const debounce = ( fn, ms ) => {
    let timerID;
    return ( ...args ) => {
        const bound = fn.bind( this, ...args );
        clearTimeout( timerID );
        timerID = setTimeout( bound, ms );
    }
}

export default debounce;