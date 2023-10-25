import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import Input from "../input";
import logo from "../../public/header-logo.png";
import Button from "../button";
import Divider from "../hr";
import * as AiIcons from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import * as Icons from "react-icons/hi2";
import ReactPaginate from "react-paginate";
import cn from "classnames";

const SearchResults = () => {
  const [filteredDatas, setFilteredDatas] = useState();
  const [jsonData, setJsonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [selectFilter, setSelectFilter] = useState(false);
  const [filterName, setFilterName] = useState("Order By");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 3;

  // useEffect(() => {
  //   const storedData = localStorage.getItem("jsonData");
  //   const text = searchParams.get("txt");
  //   console.log(text);
  //   setSearchValue(text);
  //   if (storedData) {
  //     setJsonData(JSON.parse(storedData));
  //   }
  // }, []);

  // useEffect(() => {
  //   searchData(searchValue);
  // }, [jsonData]);

  useEffect(() => {
    const storedData = localStorage.getItem("jsonData");
    if (storedData) {
      setJsonData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    searchData(searchValue);
  }, [jsonData, searchValue]);

  useEffect(() => {
    const text = searchParams.get("txt");
    setSearchValue(text);
  }, [searchParams]);

  const searchData = (txt) => {
    setSearchValue(txt);
    const filteredDatas = jsonData.filter((search) =>
      search.nameSurname?.toLowerCase()?.includes(txt)
    );
    setFilteredDatas(filteredDatas);
  };

  const handleSearch = (event) => {
    const term = event.target.value?.toLowerCase();
    searchData(term);
  };

  const handleFilter = (filterType) => {
    let sortedData = [...filteredDatas];
    if (filterType === "A-Z") {
      sortedData.sort((a, b) => a.nameSurname.localeCompare(b.nameSurname));
      setFilterName("Name ascending");
      setSelectFilter(false);
    } else if (filterType === "Z-A") {
      sortedData.sort((a, b) => b.nameSurname.localeCompare(a.nameSurname));
      setFilterName("Name descending");
      setSelectFilter(false);
    }
    setFilteredDatas(sortedData);
    setActiveFilter(filterType);
  };

  const toggleFilter = () => {
    setSelectFilter((prevFilter) => !prevFilter);
  };

  const currentData = filteredDatas?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Sayfa değiştikçe çalışacak işlev
  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  return (
    <div className="container">
      <div className={Style.search}>
        <div className={Style.header}>
          <div className={Style.left}>
            <img src={logo} alt="" />
            <Input
              value={searchValue || ""}
              handleSearch={handleSearch}
              results
            />
          </div>

          <Button href="/record">Add new record</Button>
        </div>

        <div className={Style.filter}>
          <div className={Style.selectFilter}>
            {filterName === "Order By" ? (
              <span className={Style.filterBtn} onClick={toggleFilter}>
                <Icons.HiMiniArrowsUpDown /> {filterName}
              </span>
            ) : (
              <span className={Style.filterBtn} onClick={toggleFilter}>
                {filterName}
              </span>
            )}
            <div
              className={selectFilter ? Style.activeFilter : Style.noneFilter}
            >
              <span
                onClick={() => handleFilter("A-Z")}
                className={activeFilter === "A-Z" ? Style.active : ""}
              >
                Name ascending
              </span>
              <span
                onClick={() => handleFilter("Z-A")}
                className={activeFilter === "Z-A" ? Style.active : ""}
              >
                Name descending
              </span>
            </div>
          </div>
        </div>

        <div className={Style.results}>
          {currentData?.map((data, index) => (
            <div key={index} className={Style.border}>
              <div className={Style.card}>
                <div className={Style.left}>
                  <AiIcons.AiOutlineUser />

                  <div className={Style.user}>
                    <p>{data?.nameSurname}</p>
                    <span>{data?.company}</span>
                  </div>
                </div>
                <div className={Style.right}>
                  <p>{data?.country}</p>
                  <span>{data?.city}</span>
                </div>
              </div>
              {index !== 2 && <Divider />}
            </div>
          ))}
        </div>

        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(filteredDatas?.length / itemsPerPage)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={Style.activePag}
          className={cn(Style.pagination)}
        />
      </div>
    </div>
  );
};

export default SearchResults;
