/**
 * load
 * Handles iPhone Touch Events For A Better Mobile Viewing Experience
 */
 const load = () => {
    try {
        if( document.readyState !== "complete" )
            {
                setTimeout( () => { load(); }, 100 );
                return;
            }

        if( /iP(hone|ad)/.test( window.navigator.userAgent ) )
            {
                let elements = [ ...document.querySelectorAll( "li" ) ];
                let empty = function() {};
                for( let i = 0; i < elements.length; i++ )
                    {
                        elements[i].addEventListener( "touchstart", empty, false );
                    }
            }
    } catch( err ) {
        console.error( `Error: `, err );
    }
}

export default load;