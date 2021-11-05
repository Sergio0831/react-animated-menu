import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "./UIComponents/Button";

type CategoriesProps = {
  categories: [string, ...string[]];
  filterItems: (category: string) => void;
};

const Categories = ({ filterItems, categories }: CategoriesProps) => {
  const [active, setActive] = useState(categories[0]);

  const toggleActive = (type: string) => {
    setActive(type);
  };

  return (
    <motion.div className='btn-container'>
      {categories.map((category, index) => (
        <Button
          type='button'
          className={active === category ? "filter-btn active" : "filter-btn"}
          key={index}
          index={index}
          onClick={() => {
            filterItems(category);
            toggleActive(category);
          }}
          children={category}
        />
      ))}
    </motion.div>
  );
};

export default Categories;
