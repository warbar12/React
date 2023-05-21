import { useState } from 'react';
import './scss/modal.scss'

function AddACard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleConfirmPurchase = () => {
    // Здесь можно добавить код для обработки подтверждения покупки
    setShow(false);
  };

  return (
    <>
      <button className="purchase-btn" onClick={handleShow}>
        Добавить в корзину
      </button>

      {show && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Подтвердить покупку</h3>
              <button className="close-btn" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Вы уверены, что хотите добавить товар в покупку?</p>
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={handleClose}>
                Отмена
              </button>
              <button className="confirm-btn" onClick={handleConfirmPurchase}>
                Подтвердить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddACard;