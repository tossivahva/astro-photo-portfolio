import { motion } from "framer-motion";

export const MenuToggle = ({ toggle }: { toggle: () => void }) => {
    return (
        <button
            onClick={toggle}
            className="space-y-1.5 z-10"
        >
            <motion.span
                variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: 8 },
                }}
                className="block w-6 h-0.5 bg-white rounded-full"
            ></motion.span>
            <motion.span
                variants={{
                    closed: { opacity: 1, scaleX: 1 },
                    open: { opacity: 0, scaleX: 0 },
                }}
                className="block w-6 h-0.5 ml-2.5 bg-white rounded-full"
            ></motion.span>
            <motion.span
                variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: -8 },
                }}
                className="block w-6 h-0.5 bg-white rounded-full"
            ></motion.span>
        </button>
    );
};
