import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactElement = {
//     type : 'a',
//     props : {
//         href: "https://google.com",
//         target:"_blank"
//     },
//     children : 'Google'
// }

const aReactElement = React.createElement(
    'a',                                                  //type of tage
    {href: 'https://google.com', target : "_blank"},     //props
    'click to visit google'                              //childrens

)


ReactDOM.createRoot(document.getElementById('root')).render(
    
    aReactElement
    
)
