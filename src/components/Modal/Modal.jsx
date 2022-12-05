// import {  useEffect } from 'react';
// import { ModalWindow, Overlay } from './Modal.styled';
// import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

// const modalRoot = document.querySelector('#modal-root');

// export function Modal({ onClose, children }) {
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//   });
//   const handleBackdrop = event => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };
//   const handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       window.removeEventListener('keydown', handleKeyDown);
//       onClose();
//     }
//   };
//   return createPortal(
//     <div>
//       <Overlay onClick={handleBackdrop}>
//         <ModalWindow>{children}</ModalWindow>
//       </Overlay>
//     </div>,
//     modalRoot
//   );
// }
// Modal.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func,
// };
