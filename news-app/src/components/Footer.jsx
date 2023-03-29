import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p>&copy; 2023 NewsWizard. All rights reserved.</p>
        </div>
        <div>
          <p>Follow us:</p>
          <a href="#" className="text-light me-2">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="text-light me-2">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="text-light me-2">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
