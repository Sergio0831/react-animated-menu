import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import SingleMenuItem from "./SingleMenuItem";

type MenuItemsProps = {
  menuItems: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[];
};

const Menu = ({ menuItems }: MenuItemsProps) => {
  return (
    <motion.div className='section-center'>
      <AnimatePresence exitBeforeEnter>
        {menuItems.map((item, index) => (
          <SingleMenuItem key={item.id} index={index} menuItem={item} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Menu;
