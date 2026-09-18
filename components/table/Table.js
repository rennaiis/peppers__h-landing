import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Table.module.scss";

export default function Table({headers, rows}) {
  return (
    <>
    <table className={classNames(styles.table, styles.table_desktop)}>
      <tbody>
        <tr>
          <th className={classNames(styles.table__cell, styles.table__cell_header)}>
            {headers.prize}
          </th>
          {rows.map((item, index)=>(
            <th
              key={index}
              colSpan={item.list.length}
              className={classNames(styles.table__cell, 
                styles.table__cell_prize, 
                item.isRed ? styles.table__cell_red : '')}
              >{item.prize}
            </th>
          ))}
        </tr>
        <tr>
          <th className={classNames(styles.table__cell, styles.table__cell_header)}>
            {headers.field1}
          </th>
          {rows.map((row, rowId)=>
            row.list.map((item, index) => (
              <td 
              className={classNames(styles.table__cell, styles.table__cell_value, row.isRed ? styles.table__cell_red : '')}
              key={`${rowId}-${index}`}>
                {item.f1}
              </td>
            ))  
          )}
        </tr>
        <tr>
          <th className={classNames(styles.table__cell, styles.table__cell_header)}> 
            {headers.field2}
          </th>
          {rows.map((row, rowId)=>
            row.list.map((item, index) => (
              <td
                className={classNames(styles.table__cell, styles.table__cell_value, row.isRed ? styles.table__cell_red : '')} 
                key={`${rowId}-${index}`}>
                {item.f2}
              </td>
            ))  
          )}
        </tr>
      </tbody>
    </table>
    <table className={classNames(styles.table, styles.table_mobile)}>
      <thead>
        <tr>
          <th className={classNames(styles.table__cell, styles.table__cell_header)}>
            {headers.prize}
          </th>
          <th className={classNames(styles.table__cell, styles.table__cell_header)}>
            {headers.field1}
          </th>
          <th className={classNames(styles.table__cell, styles.table__cell_header)}>
            {headers.field2}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowId) =>
          row.list.map((item, index) => (
            <tr key={`${rowId}-${index}`}>
              {index === 0 && (
                <td
                  rowSpan={row.list.length}
                  className={classNames(
                    styles.table__cell,
                    styles.table__cell_prize,
                    row.isRed ? styles.table__cell_red : ''
                  )}
                >
                  {row.prize}
                </td>
              )}
              <td className={classNames(styles.table__cell, styles.table__cell_value)}>
                {item.f1}
              </td>
              <td className={classNames(styles.table__cell, styles.table__cell_value)}>
                {item.f2}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    </>
  );
}

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
