import React from "react";
import styles from '../styles/EditorPanel.module.css';

const EditorButton = ({ label }) => {
    return (
        <button className={styles.editorButton}>
            {label}
        </button>
    )
}

export default EditorButton;
