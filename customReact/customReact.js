function customRender(reactElement, container) {
    /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
    */

    // Better approach because Element may have different number of properties.
    const domElement = document.createElement(reactElement.type);
    document.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue;
        }
        domElement.innerHTML = reactElement.children;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

   
 
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank',
    },
    children: 'Click me to visit Google'

}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
