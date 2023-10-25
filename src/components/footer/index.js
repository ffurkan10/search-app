import React from "react";
import Style from "./style.module.scss";
import image from "../../public/footer-img.png";

const Footer = () => {
  return (
    <section className={Style.footerContainer}>
      <img src={image} alt="footer-img" />
      <div className={Style.contact}>
        <h3>İletişim</h3>
        <p>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <h4>
          {" "}
          Email: <a href="mailto:bilgi@tesodev.com">bilgi@tesodev.com</a>
        </h4>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1str!2str!4v1697714751409!5m2!1str!2str"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={Style.iframe}
      ></iframe>
    </section>
  );
};

export default Footer;
