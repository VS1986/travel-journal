const React = require('react');
const Layout = require('./Layout');
const Map = require('./Map');

module.exports = function Home({ login }) {
  const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Layout login={login}>
      <div className="container" style={container}>
        <h1 className="title">
          <span>Путь в тысячу ли начинается с первого шага</span>
        </h1>
       
        <Map />
        {/* <div id="map" className="map" /> */}
        {/* <div className="contact-block-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.1693061558547!2d37.795260060568495!3d55.716023588995085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab59b3be61f9b%3A0x8e6799da30ecf98a!2z0KDRj9C30LDQvdGB0LrQuNC5INC_0YAuLCA1NCwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwOTM3Nw!5e0!3m2!1sru!2skz!4v1675009517573!5m2!1sru!2skz" width="470" height="345" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div> */}
      </div>
    </Layout>
  );
};
