function customRender(reactElement, container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    container.appendChild(domElement)

    Not so optimized approach, check optimzed approach below
    */
   
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === "Children") continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props : {
        href: "https://google.com",
        target:"_blank"
    },
    children : 'Google'
}


const mainContainer = document.getElementById('root')
customRender(reactElement, mainContainer)
