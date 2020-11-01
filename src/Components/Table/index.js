import React, { memo, useMemo, useReducer, useEffect } from "react";
import { useTable } from "react-table";
// import MOCK_DATA from "./MOCK_DATA.json";
import {getDataJson} from './Action'
import {
  initialState,
  Provider,
  reducer
} from './Reducer'
import COLUMNS from "./columns";
import './table.css'

const Table = memo((props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {dataJson} = state  
  const data = useMemo(() => dataJson, [dataJson]);
  const columns = useMemo(() => COLUMNS, []);

  useEffect(() => {
    getDataJson({dispatch})
  }, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    }) || {};

  return (
      <Provider value={{ state, dispatch }}>
        <div>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup = {}) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column = {}) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row = {}) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell = {}) => (
                <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </Provider>
  );
});

export default Table;
