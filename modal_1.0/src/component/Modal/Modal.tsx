import React, { FC, ReactNode } from 'react';
import styled from './Modal.module.scss';

interface ModalProps {
  setIsOpenModal: (state: boolean) => void;
  title: string;
  children: ReactNode;
  successBtnTitle: string;
  cancelBtnTitle: string;
  onClickSuccess: () => void;
  bottomButtons?: boolean;
}

const Modal: FC<ModalProps> = ({
  setIsOpenModal,
  title,
  children,
  successBtnTitle,
  cancelBtnTitle,
  onClickSuccess,
  bottomButtons = true,
}) => {
  const hanlerCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      className={styled.modal_background}
      onClick={() => setIsOpenModal(false)}
    >
      <div
        className={styled.modal_container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styled.modal_button_close__wraper}>
          <button
            className={styled.modal_button_close}
            onClick={hanlerCloseModal}
          >
            {' '}
            X
          </button>
        </div>

        <h1 className={styled.modal_title}>{title}</h1>

        <form className={styled.modal_form}>
          {children}
          {bottomButtons && (
            <div className={styled.modal_buttons_wrapper}>
              <button
                className={styled.modal_button_cancel}
                onClick={hanlerCloseModal}
              >
                {cancelBtnTitle}
              </button>
              <button
                className={styled.modal_button_success}
                onClick={onClickSuccess}
              >
                {successBtnTitle}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
