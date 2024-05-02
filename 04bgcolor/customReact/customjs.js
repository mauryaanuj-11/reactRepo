const reactComponent={
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
    children : "Click to visit google",
}

function renderReact(reactComponent, reactElement){
    /* 
    *********************** Method -1 ****************************
    const createElement=document.createElement(reactComponent.type);
    createElement.setAttribute('href',reactComponent.props.href);
    createElement.setAttribute('target', reactComponent.props.target);
    createElement.innerHTML=reactComponent.children;
    reactElement.appendChild(createElement);
    */

    const createEle=document.createElement(reactComponent.type);
    createEle.innerHTML=reactComponent.children;
    for(const key in reactComponent.props){
        if(key==='children') continue;
        createEle.setAttribute(key,reactComponent.props[key])
        //createEle.setAttribute(`${key}`, `${reactComponent.props[key]}`);
    }
    reactElement.appendChild(createEle);

}

const reactElement=document.getElementById('root');
renderReact(reactComponent, reactElement);