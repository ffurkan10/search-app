import React, { useEffect, useState } from "react";
import Style from "./style.module.scss";
import Input from "../input";
import Button from "../button";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Search = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/search?txt=${searchTerm}`);
  }

  useEffect(() => {
    const storedData = localStorage.getItem("jsonData");
    if (storedData) {
      setJsonData(JSON.parse(storedData));
    }
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredDatas = jsonData.filter((search) =>
      search.nameSurname.toLowerCase().includes(term)
    );
    setFilteredDatas(filteredDatas);
  };

  return (
    <div className="container">
      <div className={Style.searchContainer}>
        <div className={Style.header}>
          <h3 className="head">{title}</h3>
        </div>

        <div className={Style.search}>
          <Input
            handleSearch={handleSearch}
            value={searchTerm}
            icons={<BiIcons.BiSearch />}
            placeholder="Search"
          />
          <Button onClick={handleClick}>Search</Button>
        </div>
      </div>

      {searchTerm === "" ? (
        ""
      ) : (
        <>
          <div className={Style.searchResult}>
            {filteredDatas.slice(0, 3).map((data) => (
              <div className={Style.user}>
                <AiIcons.AiOutlineUser />
                <p>{data.nameSurname}</p>
              </div>
            ))}
            <div className={Style.searchLink}>
              <span onClick={handleClick}>Show more...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
