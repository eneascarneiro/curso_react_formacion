import React    from "react";
import template from "./componente-1.jsx";

class componente1 extends React.Component {
  render() {
    return template.call(this);
  }
}

export default componente1;
