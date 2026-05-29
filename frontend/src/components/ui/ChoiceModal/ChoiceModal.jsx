import React from 'react';
import { useModal } from '../../../hooks/useModal';
import './ChoiceModal.scss';

const ChoiceModal = () => {
  const { isOpen, close } = useModal('hasSeenChoiceModal2');

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Bạn muốn build PC hay mua linh kiện?</h2>
        <div className="options">
          <button className="option-card primary" onClick={close}>Build PC</button>
          <button className="option-card secondary" onClick={close}>Mua Linh Kiện</button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceModal;
