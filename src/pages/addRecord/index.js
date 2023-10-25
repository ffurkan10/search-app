import React from "react";
import logo from "../../public/header-logo.png";
import Style from "./style.module.scss";
import * as GrIcons from "react-icons/gr";
import { Link } from "react-router-dom";
import AddForm from "../../components/form";

const AddRecord = () => {
  return (
    <section className="container">
      <div className={Style.header}>
        <div className={Style.img}>
          <img src={logo} alt="" />
        </div>
        <div className={Style.return}>
          <Link className={Style.link} to="/">
            <GrIcons.GrLinkPrevious />
            <a>Return to List Page</a>
          </Link>
        </div>
      </div>

      <div className={Style.form}>
        <AddForm />
      </div>
    </section>
  );
};

export default AddRecord;
