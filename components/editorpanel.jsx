import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from '../styles/EditorPanel.module.css';
import Console from './console';
import EditorButton from './editorbutton';
import 'react-tabs/style/react-tabs.css';
import CommandTypes from './data/commandTypes';
import ColorPicker from './colorpicker';

// TODO: Break this monolith up by putting each tab panel into its own class. Then pass an instance of each as render props.
const EditorPanel = ({ commands, color, skew, isWavy, wavyFrequency, isExtruded, isWireframe, isAutoRotate, setIsWireframe, setIsAutoRotate, setSkew, setIsWavy, setWavyFrequency, setIsExtruded, onAddCommand }) => {

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
                        <span onClick={() => {
                            setIsAutoRotate(!isAutoRotate);
                            onAddCommand(CommandTypes.AutoRotate);
                        }}>
                            <input type="checkbox" checked={isAutoRotate} />
                            <label>Auto-Rotate</label>
                        </span>
                        <span onClick={() => {
                            setIsWireframe(!isWireframe);
                            onAddCommand(CommandTypes.Wireframe);
                        }}>
                            <input type="checkbox" checked={isWireframe} />
                            <label>Wireframe</label>
                        </span>
                        <ColorPicker selectedColor={color} onClick={(selectedColor) => onAddCommand({ ...CommandTypes.Color, data: selectedColor.name })} />
                    </div>
                </TabPanel>
                <TabPanel className={styles.tabPanel}>
                    <div className={styles.verticalContainer}>
                        <span className={styles.rangeInput}>
                            <label>Skew</label>
                            <input type="range" min={0} max={1} step={0.01} value={skew}
                                onChange={(e) => setSkew(e.target.value)}
                                onClick={() => onAddCommand({ ...CommandTypes.Skew, data: skew })} />
                        </span>
                    </div>
                </TabPanel>
                <TabPanel className={styles.tabPanel}>
                    <div className={styles.verticalContainer}>
                        <span onClick={() => {
                            setIsWavy(!isWavy);
                            onAddCommand(CommandTypes.Wavy);
                        }}>
                            <input type="checkbox" checked={isWavy}></input>
                            <label>Wavy</label>
                        </span>
                        <span className={styles.rangeInput}>
                            <label>Frequency</label>
                            <input disabled={!isWavy} type="range" min={0} max={20} step={0.1} value={wavyFrequency} onChange={(e) =>
                                setWavyFrequency(e.target.value)
                            } onClick={() => { onAddCommand({ ...CommandTypes.WavyFrequency, data: wavyFrequency }); }} />
                        </span>
                        <span onClick={() => {
                            setIsExtruded(!isExtruded);
                            onAddCommand(CommandTypes.Extrude);
                        }}>
                            <input type="checkbox" checked={isExtruded} />
                            <label>Extrude</label>
                        </span>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default EditorPanel;
