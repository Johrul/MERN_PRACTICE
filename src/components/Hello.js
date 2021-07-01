// import React, {Component} from 'react';
//
// class Hello extends Component {
//     render() {
//         return (
//             <div>
//                 Hello I am from Class Component hmn. {this.props.name}. rt {this.props.name}
//             </div>
//         );
//     }
// }
//
// export default Hello;

// My practice for writing class component shortcut rcc

import React, {Component} from 'react';

function Do(){console.log("Hello RCC")};

class Hello extends Component{

 Do(){console.log("Hello RCC within class")};


    render(){
        return(
            <div>
                <button onClick={Do}>Click RCC</button>
                <button onClick={this.Do}>Click RCC within class</button>
                Hi
            </div>
        )
    }
}

export default Hello;