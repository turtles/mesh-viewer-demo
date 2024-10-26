import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from '../styles/EditorPanel.module.css';
import Console from './console';
import EditorButton from './editorbutton';
import 'react-tabs/style/react-tabs.css';
import CommandTypes from './data/commandTypes';
import ColorPicker from './colorpicker';

const EditorPanel = ({ commands, skewAmount, color, isWireframe, onSetIsWireframe, onAddCommand }) => {

    return (
        <div className={styles.editorPanel}>
            <div className={styles.titleBar}>
                Mesh Viewer
            </div>
            <Console commands={commands} />
            <Tabs className={styles.tabContainer}>
                <TabList className={styles.tabList}>
                    <Tab className={styles.tab}>View</Tab>
                    <Tab className={styles.tab}>Transform</Tab>
                    <Tab className={styles.tab}>Deform</Tab>
                </TabList>

                <TabPanel className={styles.tabPanel}>
                    <div className={styles.verticalContainer}>
                        <span onClick={() => onSetIsWireframe(!isWireframe)}>
                            <input type="checkbox" checked={isWireframe} />
                            <label>Wireframe</label>
                        </span>
                        <ColorPicker selectedColor={color} onClick={(selectedColor) => onAddCommand({ ...CommandTypes.Color, data: selectedColor.name })} />
                    </div>
                </TabPanel>
                <TabPanel className={styles.tabPanel}>
                    <div className={styles.verticalContainer}>
                        <div className={styles.buttonContainer}>
                            <EditorButton label="Flip" onClick={() => onAddCommand(CommandTypes.Flip)} />
                            <EditorButton label="Mirror" onClick={() => onAddCommand(CommandTypes.Mirror)} />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className={styles.tabPanel}>
                    <span>
                        <label>Skew</label>
                        <input type="range" min={0} max={1} step={0.01} value={skewAmount} onChange={(e) => console.log(e.target.value)} />
                    </span>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default EditorPanel;
