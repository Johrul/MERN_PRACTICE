// import React from 'react';
//
// function Welcome(props) {
//     return (
//         <div>Hello This is from functional component {props.name}</div>
//     );
// }
//
// export default Welcome;

// import React from 'react'
// //
// // function Welcome(props){
// //     return(
// //         <div>Hello {props.name}</div>
// //     )
// // }
// //
// // export default Welcome

// Shortcut is rsf

import React from 'react';

function Welcome(props){
    function DoThis(){ console.log("Hi") }
    return(

        <div>
            <button onClick={DoThis}>RSF Click</button>
            Hi {props.name}
        </div>
    )
}

export default Welcome
