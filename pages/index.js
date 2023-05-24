import Layout from "../components/Layout";

const myStyle = {
  backgroundImage: "url('/images/tapa3.jpg')",
  height: "100vh",
  fontSize: "50px",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};
const myStyle2 = {
  backgroundImage: "url('/images/parte_atras.jpg')",
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
            <div className="card">
              <div className="card-body">
                <p className="text-white">Contáctate conmigo en:</p>
                <p className="text-white">ingridbossero@hotmail.com</p>
                <span className="text-white">ingridvbossero@gmail.com</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={myStyle}></div>
      <div style={myStyle2}></div>
    </>
  </Layout>
);

export default Index;
