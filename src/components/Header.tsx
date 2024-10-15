import { HeaderProps } from "interfaces/headerProps";
import React, { useState } from "react";
import { MdSort } from "react-icons/md";

const Header = ({ onSort }: HeaderProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const onChange = (value: string) => {
    setSelectedValue(value);
    onSort(value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark w-75 z-3 p-3 position-fixed">
      <div className="container-fluid flex-nowrap">
        <h5 className="navbar-brand text-light">European Countries</h5>
        <div className="d-flex">
          <MdSort size={42} style={{ fill: "white" }} />
          <select
            className="form-select bg-dark text-white ms-2"
            onChange={(e: any) => onChange(e.currentTarget.value)}
            value={selectedValue}
          >
            <option value="name">Country</option>
            <option value="capital">Capital</option>
            <option value="population">Population</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Header;
