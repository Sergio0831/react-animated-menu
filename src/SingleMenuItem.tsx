import { motion } from "framer-motion";
import React from "react";

type MenuItemProps = {
  menuItem: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  };
  index: number;
};

const SingleMenuItem = ({ menuItem, index }: MenuItemProps) => {
  const { title, price, img, desc } = menuItem;

  return (
    <motion.article
      className='menu-item'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <img src={img} alt={title} className='photo' />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>&euro;{price}</h4>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </motion.article>
  );
};

export default SingleMenuItem;
