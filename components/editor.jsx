import { useState } from 'react';
import Scene from './3d/scene';
import EditorPanel from './editorpanel';

export default function Editor() {
    const [commands, setCommands] = useState([]);
    const [isAutoRotate, setIsAutoRotate] = useState(true);
    const [isWireframe, setIsWireframe] = useState(true);
    const [skew, setSkew] = useState(0);
    const [color, setColor] = useState({ name: 'white' });
    const [isWavy, setIsWavy] = useState(false);
    const [isExtruded, setIsExtruded] = useState(false);
    const [wavyFrequency, setWavyFrequency] = useState(10);

    function processCommand(command) {
        if (command.name === "Color") {
            setColor({ name: command.data });
        }
        if (!!command.data) {
            command.label = command.label.replace('{0}', command.data)
        }
        return command;
    }

    function onAddCommand(command) {
        setCommands([...commands,
        processCommand(command)]);
    }
    console.log(isWavy);

    return (
        <>
            <Scene
                color={color}
                isWireframe={isWireframe}
                skew={skew}
                wavyFrequency={wavyFrequency}
                isWavy={isWavy}
                isExtruded={isExtruded}
                isAutoRotate={isAutoRotate}
                setIsAutoRotate={setIsAutoRotate}
            />
            <EditorPanel
                commands={commands}
                color={color}
                skew={skew}
                wavyFrequency={wavyFrequency}
                isWavy={isWavy}
                isExtruded={isExtruded}
                isWireframe={isWireframe}
                isAutoRotate={isAutoRotate}
                setSkew={setSkew}
                setIsWireframe={setIsWireframe}
                setIsAutoRotate={setIsAutoRotate}
                setIsWavy={setIsWavy}
                setWavyFrequency={setWavyFrequency}
                setIsExtruded={setIsExtruded}
                onAddCommand={onAddCommand}
            />
        </>
    );
}
