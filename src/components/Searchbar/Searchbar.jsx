
// import { useState } from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { Form, Button, Input, Label, Searchbarr } from './Searchbar.styled';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

// export function Searchbar({ onSubmi }) {
//   const [input, setInput] = useState('');

//   const handleChangeInput = event => {
//     setInput(event.target.value);
//   };

//   const handleSend = event => {
//     event.preventDefault();
//     if (input.trim() === '') {
//       toast.error('Please, enter a valid value');
//       return;
//     }
//     onSubmi(input);
//     setInput('');
//   };
//   return (
//     <Searchbarr>
//       <Form onSubmit={handleSend}>
//         <Button type="submit">
//           <AiOutlineSearch />
//           <Label>Search</Label>
//         </Button>
//         <Input
//           type="text"
//           placeholder="Search images and photos"
//           onChange={handleChangeInput}
//           value={input}
//         />
//         <ToastContainer></ToastContainer>
//       </Form>
//     </Searchbarr>
//   );
// } 


// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };
