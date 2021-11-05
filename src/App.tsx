import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { MenuItem } from "./menuItem.model";
import { motion } from "framer-motion";

const allCategories: [string, ...string[]] = [
  "all",
  ...new Set(items.map((item) => item.category))
];

const App = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4
                }
              }
            }}
          >
            <h2>our menu</h2>
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                width: 0
              },
              visible: {
                width: 100,
                transition: {
                  delay: 0.6
                }
              }
            }}
            className='underline'
          ></motion.div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};

export default App;
