import React from 'react';
import {
    Grid
} from '@material-ui/core';
import ModalComp from './modal'
import ExpansionPanelDropdown from './expansionPanelDropdown'
import styles from './advSearch.module.css'

const AdvancedSearch = () => {

    
    return (
        <Grid 
        id={styles.containerGrid}
        container
        >
    <ModalComp/>
<ExpansionPanelDropdown/>
        </Grid>
    );
}

export default AdvancedSearch;