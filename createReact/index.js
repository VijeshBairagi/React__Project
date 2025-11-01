const domElement = document.querySelector("#root")

function createElement(ReactElement, container) {
  // const tag = document.createElement(ReactElement.type)
  // tag.innerHTML = ReactElement.children
  // tag.setAttribute("href", ReactElement.props.href)
  // tag.setAttribute("target", ReactElement.props.target)
  // container.appendChild(tag)

     const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    for (const prop in ReactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, ReactElement.props[prop])
    }
    container.appendChild(domElement)
}

const ReactElement = {
  type: "a",
  props: {
    href: " https://google.com",
    target: "_blank"
  },
  children: "VISIT GOOGLE"
}

createElement(ReactElement, domElement)