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
  const [page, setPage] = useState<number>(1);
  const pageSize: number = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data: CountryType[] = await getCountriesByRegion("europe");
      setOriginalData(data);
      setCountries(data.slice(0, pageSize));
    };

    fetchData();
  }, []);

  const pageChange = (page: number) => {
    const startSlice: number = pageSize  * (page -1);
    const endSlice: number = pageSize * page;
    setCountries(originalData.slice(startSlice, endSlice));
    setPage(page);
  };

  return (
    <div className="page-content">
      <Sidebar />
      <div className="container-body">
        <Header />
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
          currentPage={page}
          totalCount={originalData.length}
          onPageChange={pageChange}
        />
      </div>
    </div>
  );
}

export default App;
