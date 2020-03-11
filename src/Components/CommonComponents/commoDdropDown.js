import React from 'react'
// import PropTypes from 'prop-types'
import { Select, MenuItem, OutlinedInput, withStyles } from '@material-ui/core'

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
    heading,
    defaultlabel,
    placeholdertext,
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
      {...dropDownProps}
      value={selected === undefined || selected === null ? 'null':selected}
      className={selectstyle}
      onChange={(e) => eventhandler(e, field)}
      input={
        // outlinedinput ? (
        <OutlinedInput id="outlined-age-simple" labelWidth={0} />
        // ) : (
        //   undefined
        // )
      }
    >
      <MenuItem
        id={`${dropDownProps.id || 'emDropdown'}_${heading}_menuItem`}
        disabled
        value=""
      >
        <h6 className={classes.menuItemFontSize}>{heading}</h6>
      </MenuItem>
      {placeholdertext ? (
        <MenuItem
          id={`${dropDownProps.id || 'emDropdown'}_${defaultlabel}_menuItem`}
          disabled
          value={null}
          selected={selected === undefined || selected === null}
          className={classes.menuItemFontSize}
        >
          {defaultlabel}
        </MenuItem>
      ) : (
        <MenuItem
          id={`${dropDownProps.id || 'emDropdown'}_None_menuItem`}
          value={null}
          selected={selected === undefined || selected === null}
          className={classes.menuItemFontSize}
        >
          None
        </MenuItem>
      )}
      {items}
      {noneRequired && (
        <MenuItem value="none">
          <em>None</em>
        </MenuItem>
      )}
    </Select>
  )
}

export default withStyles(styles)(EmDropdown)

