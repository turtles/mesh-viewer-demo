import React from "react";
import styles from '../styles/EditorPanel.module.css';

const Console = ({ commands }) => {
    return (
        <div className={styles.console}>
            {commands.reverse().map((command, index) => (<span key={index}>{command.label}</span>))}
        </div>
    )
}

export default Console;
