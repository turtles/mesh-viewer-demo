import React from "react";
import styles from '../styles/EditorPanel.module.css';

const EditorButton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className={styles.editorButton}>
            {label}
        </button>
    )
}

export default EditorButton;
