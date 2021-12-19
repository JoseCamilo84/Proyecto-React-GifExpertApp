import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategories = ({ setCategories }) => {

   const [inputValue, setInputValue] = useState('');


   const handleInputChange = (e) => setInputValue(e.target.value);


   const handleSubmit = (e) => {
      e.preventDefault();

      if (inputValue.trim().length > 2) {
         setCategories(categ => [inputValue, ...categ]);
         e.target.reset();
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Ingrese una Categoría"
            onChange={handleInputChange}
         />
      </form>
   );
};

export default AddCategories;


AddCategories.propTypes = {
   setCategories: PropTypes.func.isRequired
};