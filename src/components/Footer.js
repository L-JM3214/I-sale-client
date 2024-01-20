import React from 'react';
import '../App.css'; 

const NavigationLink = ({ href, text }) => (
  <li className="list-inline-item">
    <a href={href}>{text}</a>
  </li>
);

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="nav-footer">
              <ul className="list-inline">
                <NavigationLink href="#" text="Home" />
                {/* Add other NavigationLink components as needed */}
              </ul>
            </nav>
            <div className="socials-a">
              {/* Your social media icons go here */}
            </div>
            <div className="copyright-footer">
              <p className="copyright color-text-a">
                &copy; Copyright
                <span className="color-a">YourCompany</span> All Rights Reserved.
              </p>
            </div>
            <div className="credits">
              {/* Credits go here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

