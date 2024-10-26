import { useState } from 'react';
import Scene from './3d/scene';
import EditorPanel from './editorpanel';

export default function Editor() {
    const [commands, setCommands] = useState([]);
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

    function onSetIsWireframe(isWireframe) {
        setIsWireframe(isWireframe);
    }

    console.log(commands);
    return (
        <>
            <Scene color={color} isWireframe={isWireframe} />
            <EditorPanel
                commands={commands}
                color={color}
                isWireframe={isWireframe}
                onSetIsWireframe={onSetIsWireframe}
                onAddCommand={onAddCommand}
            />
        </>
    );
}
