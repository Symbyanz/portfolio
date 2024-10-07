import { ReactNode } from "react";
import styles from "./TextContainer.module.css";

export interface TextContainerProps {
    children: ReactNode;
}

const TextContainer = ({ children }: TextContainerProps) => {
    return (
        <div className={styles.textContainer}>
            {children}
        </div>
    );
};

export default TextContainer;