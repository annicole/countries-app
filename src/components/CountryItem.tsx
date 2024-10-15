import { CountryProps } from "interfaces/country";
import React, { useState } from "react";

import { MdOutlineLanguage } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";

import { GrCurrency } from "react-icons/gr";

import "style/CountryItem.css";
import { formatBigNumber } from "utils/format";

const CountryItem = ({
  name,
  capital,
  currencies,
  languages,
  population,
}: CountryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" card card-country" onClick={changeState}>
      <div className="">
        <div className="row p-4">
          <div className="col align-self-center">
            <button type="button" className="btn btn-link text-muted">
              {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </button>
          </div>
          <div className="col-8 d-flex justify-content-between align-items-center">
            <span className="fs-4 fw-bold">{name}</span>
            <div>{capital}</div>
          </div>
          <div className="col align-items-center justify-content-start p-3 d-flex">
            <FaPeopleGroup />
            <span className="badge text-bg-success ms-3">
              {formatBigNumber(population)}
            </span>
          </div>
        </div>
        {isOpen ? (
          <div className="mt-3 pb-5 mx-4 align-self-center row">
            <div className="col">
              <div className="pb-2 d-flex align-items-center">
                <GrCurrency />
                <div className="fw-bold ms-4">Currencies</div>
              </div>
              <div>
                <ul className="list-group">
                  {Object.keys(currencies).map((currency) => (
                    <li
                      key={currency}
                      className="list-group-item d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          {currencies[currency].name}
                        </div>
                      </div>
                      <span className="badge text-bg-primary rounded-pill">
                        {currencies[currency].symbol}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="py-2 d-flex align-items-center">
                <MdOutlineLanguage />
                <div className="fw-bold ms-4">Languages</div>
              </div>
              <div>
                <ul className="list-group">
                  {Object.keys(languages).map((language) => (
                    <li key={language} className="list-group-item">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{languages[language]}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CountryItem;
