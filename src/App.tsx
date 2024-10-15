import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "components/Sidebar";
import { getCountriesByRegion } from "api/api";
import { CountryType } from "interfaces/country";
import CountryItem from "components/CountryItem";
import Header from "components/Header";
import Footer from "components/Footer";

function App() {
  const [countries, setCountries] = useState<CountryType[] | []>([]);
  const [originalData, setOriginalData] = useState<CountryType[] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize: number = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data: CountryType[] = await getCountriesByRegion("europe");
      setOriginalData(data);
      setCountries(data.slice(0, pageSize));
    };

    fetchData();
  }, []);

  useEffect(() => {
    sortData("name");
  }, [originalData]);

  const pageChange = (page: number) => {
    const startSlice: number = pageSize * (page - 1);
    const endSlice: number = pageSize * page;
    setCountries(originalData.slice(startSlice, endSlice));
    setCurrentPage(page);
  };

  const sortData = (key: string) => {
    const sortedData = originalData.sort((a, b) => {
      let x = "";
      let y = "";

      if (key === "population") {
        return a.population - b.population;
      }

      if (key === "name") {
        x = a.name.common.toLowerCase();
        y = b.name.common.toLowerCase();
      }

      if (key === "capital") {
        x = a.capital[0].toLowerCase();
        y = b.capital[0].toLowerCase();
      }

      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });

    const startSlice: number = pageSize * (currentPage - 1);
    const endSlice: number = pageSize * currentPage;
    setCountries(sortedData.slice(startSlice, endSlice));
  };

  return (
    <div className="page-content">
      <Sidebar />
      <div className="container-body">
        <Header onSort={sortData} />
        <div className="countries-section">
          {countries?.map((country: CountryType, index: number) => (
            <CountryItem
              key={index}
              name={country.name.common}
              capital={country.capital[0]}
              currencies={country.currencies}
              languages={country.languages}
              population={country.population}
            />
          ))}
        </div>
        <Footer
          currentPage={currentPage}
          totalCount={originalData.length}
          onPageChange={pageChange}
        />
      </div>
    </div>
  );
}

export default App;
