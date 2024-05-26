import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-20 border-gray-200 border-t-[1px]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-blackfont-semibold mb-4">OFFLINE STORE</h3>
          <ul>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>Find Stores Near Me</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-blackfont-semibold mb-4">GET TO KNOW US</h3>
          <ul>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>Contact Us</p>
            </li>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>FAQ's</p>
            </li>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>Blogs</p>
            </li>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>Terms &amp; Conditions</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-blackfont-semibold mb-4">
            TRACK OR RETURN/EXCHANGE ORDER
          </h3>
          <ul>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>TRACK ORDER</p>
            </li>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>PLACE RETURN/EXCHANGE REQUEST</p>
            </li>
            <li className="text-black hover:text-blacktransition-colors mb-2">
              <p>RETURNS/EXCHANGE POLICY</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-blackfont-semibold mb-4">CUSTOMER CARE</h3>
          <p className="text-black mb-2">Timings: 10 AM - 7 PM (Mon - Sat)</p>
          <p className="text-black mb-2">Whatsapp: +91 8089735806</p>
          <p className="text-black mb-2">Instagram: @heavenly.co.in</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <h3 className="text-blackfont-semibold mb-4">SIGN UP AND SAVE</h3>
        <p className="text-black">
          Sign up now and be the first to know about exclusive offers, latest fashion trends &amp; style tips!
        </p>
      </div>
    </footer>
  );
};

export default Footer;