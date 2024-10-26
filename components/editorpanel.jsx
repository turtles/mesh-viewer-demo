import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from '../styles/EditorPanel.module.css';
import Console from './console';
import EditorButton from './editorbutton';
import 'react-tabs/style/react-tabs.css';
import CommandTypes from './commandTypes';

const EditorPanel = ({ isWireframe, onSetIsWireframe, onAddCommand }) => {

    return (
        <div className={styles.editorPanel}>
            <div className={styles.titleBar}>
                Mesh Viewer
            </div>
            <Console commands={["Rotate mesh", "Flip mesh"]} />
            <Tabs className={styles.tabContainer}>
                <TabList className={styles.tabList}>
                    <Tab className={styles.tab}>View</Tab>
                    <Tab className={styles.tab}>Transform</Tab>
                    <Tab className={styles.tab}>Deform</Tab>
                </TabList>

                <TabPanel className={styles.tabPanel}>
                    <span onClick={() => onSetIsWireframe(!isWireframe)}>
                        <input type="checkbox" checked={isWireframe} />
                        <label>Wireframe</label>
                    </span>
                </TabPanel>
                <TabPanel className={styles.tabPanel}>
                    <div className={styles.buttonContainer}>
                        <EditorButton label="Flip" onClick={() => onAddCommand(CommandTypes.Flip)} />
                        <EditorButton label="Mirror" />
                        <EditorButton label="Double" />
                    </div>
                </TabPanel>
                <TabPanel className={styles.tabPanel}>
                    <span>Deform</span>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default EditorPanel;
