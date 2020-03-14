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

const AdvancedSearch = () => {

    const [age, setAge] = React.useState();

    const handleChange = event => {
        setAge(event.target.value);
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
          id="panel1a-header"
        >
            Leads
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
        id={styles.expansionPanelDetails}
        >
        <EmDropdown 
                label = 'label' 
                value ='value' 
                list={[{label:'a',value:1},{label:'ab'},{label:'abc'},{label:'abcd'}]} 
                defaultlabel='Leads'
                selected={age}
                eventhandler={handleChange}
                id = {styles.dropDown}
                />
                <EmDropdown 
                label = 'label' 
                value ='value' 
                list={[{label:'a',value:1},{label:'ab'},{label:'abc'},{label:'abcd'}]} 
                defaultlabel='Leads'
                selected={age}
                eventhandler={handleChange}
                id = {styles.dropDown}
                />
                <EmDropdown 
                label = 'label' 
                value ='value' 
                list={[{label:'a',value:1},{label:'ab'},{label:'abc'},{label:'abcd'}]} 
                defaultlabel='Leads'
                selected={age}
                eventhandler={handleChange}
                id = {styles.dropDown}
                />
                <EmDropdown 
                label = 'label' 
                value ='value' 
                list={[{label:'a',value:1},{label:'ab'},{label:'abc'},{label:'abcd'}]} 
                defaultlabel='Leads'
                selected={age}
                eventhandler={handleChange}
                id = {styles.dropDown}
                />
                <EmDropdown 
                label = 'label' 
                value ='value' 
                list={[{label:'a',value:1},{label:'ab'},{label:'abc'},{label:'abcd'}]} 
                defaultlabel='Leads'
                selected={age}
                eventhandler={handleChange}
                id = {styles.dropDown}
                />
                <EmDropdown 
                label = 'label' 
                value ='value' 
                list={[{label:'a',value:1},{label:'ab'},{label:'abc'},{label:'abcd'}]} 
                defaultlabel='Leads'
                selected={age}
                eventhandler={handleChange}
                id = {styles.dropDown}
                />
                <EmDropdown 
                label = 'label' 
                value ='value' 
                list={[{label:'a',value:1},{label:'ab'},{label:'abc'},{label:'abcd'}]} 
                defaultlabel='Leads'
                selected={age}
                eventhandler={handleChange}
                id = {styles.dropDown}
                />
        </ExpansionPanelDetails>
      </ExpansionPanel>
            </Grid>
        </Grid>
    );
}

export default AdvancedSearch;