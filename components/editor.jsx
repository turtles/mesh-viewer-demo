import { useState } from 'react';
import Scene from './3d/scene';
import EditorPanel from './editorpanel';

export default function Editor() {
    const [commands, setCommands] = useState([]);
    const [isWireframe, setIsWireframe] = useState(true);

    function onAddCommand(command) {
        setCommands([...commands, command]);
    }

    function onSetIsWireframe(isWireframe) {
        setIsWireframe(isWireframe);
    }

    console.log(commands);
    return (
        <>
            <Scene isWireframe={isWireframe} />
            <EditorPanel
                isWireframe={isWireframe}
                onSetIsWireframe={onSetIsWireframe}
                onAddCommand={onAddCommand}
            />
        </>
    );
}
