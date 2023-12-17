import React, { useCallback, useState } from 'react';
import Modal from './component/Modal/Modal';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCheckout = useCallback(() => {
    console.log('handleCheckout');

    setIsOpenModal(false);

    navigate('./new_page');
  }, []);

  return (
    <div className='App'>
      <button onClick={() => setIsOpenModal(true)}> open modal</button>
      {isOpenModal && (
        <Modal
          title='Are you sure you want to buy?'
          cancelBtnTitle='Cancel'
          successBtnTitle='Buy'
          setIsOpenModal={setIsOpenModal}
          onClickSuccess={handleCheckout}
        >
          <p>
            After clicking the &apos;Buy&apos; button, your order will be
            processed.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
