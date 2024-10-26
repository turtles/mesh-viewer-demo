import React from "react";
import styles from '../styles/EditorPanel.module.css';
import Console from './console';
import EditorButton from './editorbutton';

const EditorPanel = (props) => {
    return (
        <div className={styles.editorPanel}>
            <div className={styles.titleBar}>
                Mesh Viewer
            </div>
            <Console commands={["Rotate mesh", "Flip mesh"]} />
            <div className={styles.buttonContainer}>
                <EditorButton label="Scale">

                </EditorButton>
            </div>
        </div>
    )
}

export default EditorPanel;
