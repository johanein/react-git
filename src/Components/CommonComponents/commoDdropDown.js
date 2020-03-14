import React from 'react'
// import PropTypes from 'prop-types'
import { Select, MenuItem, withStyles } from '@material-ui/core'

const styles = () => ({
  menuItemFontSize: {
    fontSize: 12
  }
})

const EmDropdown = (props) => {
  const {
    classes,
    eventhandler,
    field,
    selected,
    list,
    label,
    value,
    defaultlabel,
    outlinedinput,
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
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
      {...dropDownProps}
      value={selected === undefined || selected === null ? 'null':selected}
      className={selectstyle}
      onChange={(e) => eventhandler(e, field)}
    >
      {defaultlabel && (
        <MenuItem
          id={`${dropDownProps.id || 'emDropdown'}_${defaultlabel}_menuItem`}
          disabled
          value={null}
          selected={selected === undefined || selected === null}
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
  )
}

export default withStyles(styles)(EmDropdown)

