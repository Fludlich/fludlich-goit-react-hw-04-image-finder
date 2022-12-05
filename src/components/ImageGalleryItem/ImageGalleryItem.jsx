import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Item, Image } from './ImageGallryItem.styled';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ id, webformat, largeImage, tag }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(state => !state);
  };
  return (
    <li key={id}>
      <Item>
        <Image src={webformat} alt={tag} onClick={toggleModal} />
      </Item>
      {modal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage} alt={tag} />
        </Modal>
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformat: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
