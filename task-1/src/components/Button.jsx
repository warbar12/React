import { Component } from "react";


class Button extends Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;
    return (
      <button className='btnFirstModal'  style={{ backgroundColor }} onClick={onClick}>
        {text}
      </button>
    );
  }
}
export default Button