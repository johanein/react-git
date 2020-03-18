import React, { memo } from 'react';
import { 
    Select, 
    MenuItem, 
    Input , 
    withStyles,
    InputLabel,
    FormControl
} from '@material-ui/core'

const styles = () => ({
    menuItemFontSize: {
      fontSize: 12
    },
    inputStyle : {
      marginLeft:0
    }
  })

const CommonMultiDropdown = memo((props) => {
    const {
        classes,
        eventhandler,
        field,
        selected,
        list,
        label,
        value,
        defaultlabel,
        selectstyle,
        handleChange,
        noneRequired,
        ...dropDownProps
      } = props

      let hasList = false
      hasList = list && list instanceof Array
      
      const items =
      hasList &&
      list.map((item, index) => {
        const itemValue = item[value]
        return (
          <MenuItem
            id={`${dropDownProps.id || 'emDropdown'}-${index}_menuItem`}
            key={itemValue}
            value={itemValue}
            name={item[dropDownProps.name]}
            selected={itemValue === selected}
            className={classes.menuItemFontSize}
          >
            {item[label]}
          </MenuItem>
        )
      })

    return (                 
        <FormControl>
        <InputLabel 
        className={classes.inputStyle}
        >{defaultlabel}
        </InputLabel> 
    <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"ß
          multiple
          value={selected}
          onChange={(e) => eventhandler(e, field)}
          input={<Input />}
          {...dropDownProps}
        >
            {defaultlabel && (
        <MenuItem
          id={`${dropDownProps.id || 'emDropdown'}_${defaultlabel}_menuItem`}
          disabled
          className={classes.menuItemFontSize}
        >
          {defaultlabel}
        </MenuItem>
      ) }
          {items}
          {noneRequired && (
        <MenuItem value={null}>
          <em>None</em>
        </MenuItem>
      )}
        </Select>
        </FormControl>
    );
});

export default withStyles(styles)(CommonMultiDropdown)