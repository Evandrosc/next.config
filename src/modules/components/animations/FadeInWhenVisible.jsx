import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px", amount: "some" }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { FadeInWhenVisible };
