import React from 'react';
import {
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from '../advSearch.module.css'
import Emt from '../EMTab_background.jpg'
import EmDropdown from './CommonComponents/commoDdropDown'
import CommonMultiDropdown from './CommonComponents/commonMultiDropdown'

const AdvancedSearch = () => {

    const [age, setAge] = React.useState(null);
    const [ageArray, setAgeArray] = React.useState([]);

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleChangeMultiple = event => {
        setAgeArray(event.target.value);
    };

    return (
        <Grid container>
            <Grid
                id={styles.bigGrid}
                item
                xs={9}
            >
                <img
                    id={styles.img3}
                    src={Emt}
                    alt='imageHere'
                />
            </Grid>
            <Grid
                id={styles.smallGrid}
                item
                xs={3}
            >
                <ExpansionPanel
                    id={styles.expansionPanel}
                >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        Leads
        </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                        id={styles.expansionPanelDetails}
                    >
                        <EmDropdown
                        id={styles.dropDown}
                            label='label'
                            value='value'
                            list={[{ label: 'a', value: 1 }, { label: 'ab', value: 2 }, { label: 'abc', value: 3 }, { label: 'abcd', value: 4 }]}
                            defaultlabel='dropDown'
                            selected={age}
                            eventhandler={handleChange}
                        />
                        <CommonMultiDropdown
                        id={styles.dropDown}
                            label='label'
                            value='value'
                            selected={ageArray}
                            list={[{ label: 'a', value: 1 }, { label: 'ab', value: 2 }, { label: 'abc', value: 3 }, { label: 'abcd', value: 4 }]}
                            defaultlabel='multiDropdown'
                            eventhandler={handleChangeMultiple}
                        />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        </Grid>
    );
}

export default AdvancedSearch;