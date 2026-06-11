"use client";

import { motion } from "framer-motion";
import React from "react";
import { SectionContext } from "./Section";

const StaggerContext = React.createContext(false);

interface CardWrapperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  enableHoverEffect?: boolean;
  as?: string;
  variants?: any;
}

export default function CardWrapper({
  children,
  className,
  style,
  enableHoverEffect = true,
  as,
  ...rest
}: CardWrapperProps) {
  const isInStagger = React.useContext(StaggerContext);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const hoverProps = enableHoverEffect
    ? {
        whileHover: { scale: 1.02, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
        whileTap: { scale: 0.98 },
      }
    : {};

  const MotionComponent = as ? (motion as any)[as] || motion.div : motion.div;

  const contextInView = React.useContext(SectionContext);
  const isControlled = contextInView !== undefined;
  const isInView = isControlled ? contextInView : false;

  const animationProps = isInStagger
    ? {}
    : isControlled
    ? {
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
      }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
      };

  return (
    <MotionComponent
      variants={itemVariants}
      className={className}
      style={style}
      {...animationProps}
      {...hoverProps}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className,
  style,
  staggerDelay = 0.1,
}: StaggerContainerProps) {
  const contextInView = React.useContext(SectionContext);
  const isControlled = contextInView !== undefined;
  const isInView = isControlled ? contextInView : false;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const animationProps = isControlled
    ? {
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
      }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
      };

  return (
    <StaggerContext.Provider value={true}>
      <motion.div
        variants={containerVariants}
        className={className}
        style={style}
        {...animationProps}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}

