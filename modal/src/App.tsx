import React, {useState} from 'react';
import Modal from "./component/modal/Modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <div className="App">
      <button onClick={ () => setIsOpenModal(true) }> open modal</button>
      { isOpenModal && <Modal
          titleSuccessBtn='Submit'
          title='Modal_title'
          setIsOpenModal={ setIsOpenModal }
      >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur enim explicabo facilis illo illum minima molestiae, odit similique voluptate. Amet atque et excepturi in, officia optio quidem! Reiciendis, veritatis!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur enim explicabo facilis illo illum minima molestiae, odit similique voluptate. Amet atque et excepturi in, officia optio quidem! Reiciendis, veritatis!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur enim explicabo facilis illo illum minima molestiae, odit similique voluptate. Amet atque et excepturi in, officia optio quidem! Reiciendis, veritatis!</p>
      </Modal> }
    </div>
  );
}

export default App;
