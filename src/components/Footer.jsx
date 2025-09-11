import React from 'react';
import {
  logoData,
  companyData,
  customerCenterData,
  footerMenus,
  footerLegal
} from "../util/footer";

import "../styles/components/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner foot-inner">
        
        {/* 왼쪽 영역 */}
        <div className="left">
          <h3>
            <a href={logoData.href}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>

          <ul className="foot-lst-1">
            {companyData.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          <div className="footer-legal">
            <p>{footerLegal.copyright}</p>
            <div className="legal-links">
              {footerLegal.links.map((item, i) => (
                <a key={i} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 가운데 영역 */}
        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu, i) => (
              <div key={i}>
                <h4>{menu.title}</h4>
                <ul>
                  {menu.items.map((item, j) => (
                    <li key={j}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <div className="right">

          {/* 고객센터 */}
          <div>
            <h4>{customerCenterData.title}</h4>
            <p className="cs-box">
              <a href={customerCenterData.tel.href}>
                {customerCenterData.tel.value}
              </a>
            </p>
            <p>{customerCenterData.hours}</p>
            <p>{customerCenterData.notice}</p>
            <a className="talk-btn" href={customerCenterData.talk.href}>
              {customerCenterData.talk.label}
            </a>
          </div>

          {/* SNS 아이콘 */}
          <ul className="sns-links">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" title="Instagram">
                <img src="/img/icon_ins.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://talk.naver.com" target="_blank" rel="noreferrer noopener" title="Talk">
                <img src="/img/icon_c.svg" alt="Talk" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noreferrer noopener" title="YouTube">
                <img src="/img/icon_y.svg" alt="YouTube" />
              </a>
            </li>
          </ul>

          {/* 하단 Legal */}
          <div className="footer-legal">
            <div className="legal-links">
              {footerLegal.links.map((item, i) => (
                <a key={i} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <p>{footerLegal.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
