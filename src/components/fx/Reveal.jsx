import { motion, useReducedMotion } from "framer-motion";

// Intentional entrance: content rises and clarifies as it enters view.
const Reveal = ({
  children,
  as = "div",
  delay = 0,
  y = 22,
  className = "",
  amount = 0.35,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
