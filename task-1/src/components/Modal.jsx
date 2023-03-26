import { Component } from "react";
import './css/modal.css'

class Modal extends Component {
  closeModal = (event) => {
    if (event.target === this.modal) {
      this.props.onClose();
    }
  };

  render() {
    const { header, closeButton, text, actions } = this.props;
    return (
      <>
      <div className="overlay"></div>
      <div className="modal" onClick={this.closeModal} ref={(node) => (this.modal = node)}>
        <div className="modal-content">
        <div className='modalHeader'>
          <h2 className='modal-header-title'>{header}</h2>
          {closeButton && (<button className="close-button" onClick={this.props.onClose}>&times;</button>)}          
        </div>
          <p className='modal-p'>{text}</p>
          <div className="modal-actions">{actions}</div>
        </div>
      </div>
      </>
    );
  }
}

export default Modal