import React from 'react';
import {
    Grid,
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core';
import styles from '../advSearch.module.css'
import Emt from '../EMTab_background.jpg'

const AdvancedSearch = () => {

    const [age, setAge] = React.useState(0);

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <Grid container>
            <Grid item xs={9}>
                <img
                    id={styles.img3}
                    src={Emt}
                    alt='imageHere'
                />
            </Grid>
            <Grid item xs={3}>
                <FormControl className={styles.formControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem disabled value={0}>Leads</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        <MenuItem value={null}>None</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default AdvancedSearch;