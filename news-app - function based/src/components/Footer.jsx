import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="py-4 container">
        <div className="row">
          <div className="col-md-4">
            <h5>About NewsWizard</h5>
            <p>
              NewsWizard is your go-to source for the latest news on a variety of topics, including politics, technology, entertainment, and more. Stay informed with our daily updates and analysis.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@newswizard.com</li>
              <li>Phone: (555) 555-5555</li>
              <li>Address: 123 Main St, Anytown USA</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
