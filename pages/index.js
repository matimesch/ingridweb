import Layout from "../components/Layout";

const myStyle = {
  backgroundImage: "url('/images/tapa.jpg')",
  height: "100vh",
  fontSize: "50px",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

const Index = () => (
  <Layout>
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Contáctate conmigo en:</p>
            <p>ingridbossero@hotmail.com</p>
            <span>inbossero@gmail.com</span>
          </div>
        </div>
      </div>
      <div style={myStyle}></div>
    </>
  </Layout>
);

export default Index;
