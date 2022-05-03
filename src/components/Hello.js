import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Mahesh</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {'id': 'hello','className':'red'}, 
        React.createElement('h1',null,'Hello Mahesh'))
}


export default Hello