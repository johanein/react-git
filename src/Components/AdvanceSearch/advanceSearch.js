import React from 'react';
import {
    Grid
} from '@material-ui/core';
import MainDisplay from './mainDisplay'
import ExpansionPanelDropdown from './expansionPanelDropdown'
import styles from './advSearch.module.css'

const AdvancedSearch = () => {

    
    return (
        <Grid 
        id={styles.containerGrid}
        container
        >
    <MainDisplay/>
<ExpansionPanelDropdown/>
        </Grid>
    );
}

export default AdvancedSearch;