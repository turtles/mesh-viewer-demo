import styles from '../styles/EditorPanel.module.css';
import { colors } from './data/colors';

const ColorPicker = ({ selectedColor, onClick }) => (
    <span>
        <label>Color</label>
        {
            colors.map((choice) => {
                return (
                    <button className={(selectedColor === choice.name ? styles.editorColorButtonSelected : styles.editorColorButton)}
                        key={choice.name}
                        style={{ backgroundColor: `#${choice.value}` }}
                        onClick={() => onClick(choice)}>
                    </button>
                );
            })
        }
    </span>
);

export default ColorPicker;
