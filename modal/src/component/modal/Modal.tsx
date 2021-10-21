import React, {FC} from 'react';
import styled from './Modal.module.css'

interface ModalProps {
  setIsOpenModal: ( state: boolean ) => void
  title: string
  titleSuccessBtn: string
}

const Modal: FC<ModalProps> = ( {setIsOpenModal, title, children,titleSuccessBtn} ) => {
  return (
    <div className={ styled.backGroundModal } onClick={ () => setIsOpenModal(false) }>
      <div className={ styled.containerModal } onClick={ ( e ) => e.stopPropagation() }>
        <div className={ styled.closeBtn }>
          <button onClick={ () => setIsOpenModal(false) }> X</button>
        </div>
        <div className={ styled.modalTitle }>
          <h1>{ title }</h1>
        </div>

        <form className={styled.contentForm}>
          { children }
          <div className={styled.submitBtn}>
            <button >{ titleSuccessBtn }</button>
          </div>
        </form>
      </div>


    </div>
  );
};

export default Modal;