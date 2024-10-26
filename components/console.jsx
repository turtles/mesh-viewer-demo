import React from "react";
import styles from '../styles/EditorPanel.module.css';

const Console = ({ commands }) => {
    return (
        <div className={styles.console}>
            {commands.map((command, index) => (<span key={index}>{command}</span>))}
        </div>
    )
}

export default Console;
