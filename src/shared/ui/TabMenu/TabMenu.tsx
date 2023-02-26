import { Tab, Tabs } from '@mui/material';

import styles from "./styles.module.scss";

type Props = {
    onChange: (key: number) => void;
}

const TabMenu = ({ onChange }:Props) => {
    const handleOnChange = (event: React.SyntheticEvent, value:number) => {
        onChange(value);
    }
    
    return (
        <Tabs onChange={handleOnChange} className={styles.tabMenu}>
            <Tab label="Параметры" />
            <Tab label="Форма" />
            <Tab label="Компоненты" />
        </Tabs>
    )
}

export default TabMenu