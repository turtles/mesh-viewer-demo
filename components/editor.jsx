import { useState } from 'react';
import Scene from './3d/scene';
import EditorPanel from './editorpanel';

export default function Editor() {
    const [commands, setCommands] = useState([]);
    const [isAutoRotate, setIsAutoRotate] = useState(true);
    const [isWireframe, setIsWireframe] = useState(true);
    const [color, setColor] = useState({ name: 'white' });

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

    console.log(commands);
    return (
        <>
            <Scene color={color} isWireframe={isWireframe} isAutoRotate={isAutoRotate} setIsAutoRotate={setIsAutoRotate} />
            <EditorPanel
                commands={commands}
                color={color}
                isWireframe={isWireframe}
                isAutoRotate={isAutoRotate}
                setIsWireframe={setIsWireframe}
                setIsAutoRotate={setIsAutoRotate}
                onAddCommand={onAddCommand}
            />
        </>
    );
}
