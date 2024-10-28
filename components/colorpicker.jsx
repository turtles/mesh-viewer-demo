import styles from '../styles/EditorPanel.module.css';
import { colors } from './data/colors';

const ColorPicker = ({ selectedColor, onClick }) => (
    <span className={styles.colorPicker}>
        <label>Color</label>
        {
            colors.map((choice) => {
                return (
                    <button className={(selectedColor === choice.name ? styles.colorPickerButtonSelected : styles.colorPickerButton)}
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
