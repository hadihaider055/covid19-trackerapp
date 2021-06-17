import React from "react";
import "./style.css";
const Table = ({ countries }) => {
  return (
    <div className="table">
      <table>
        {countries.map(({ country, cases }) => (
          <tbody key={country}>
            <tr>
              <td>{country}</td>
              <td>
                <strong>{cases}</strong>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
