"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { popVariants, riseVariants } from "./motion";

/** Must sit inside <Stagger> to animate; renders normally otherwise. */
export default function Check({ children }: { children: ReactNode }) {
  return (
    <motion.div className="check" variants={riseVariants} whileHover={{ x: 4, transition: { duration: 0.2 } }}>
      <motion.span className="mark" variants={popVariants}>
        ✓
      </motion.span>
      {children}
    </motion.div>
  );
}
