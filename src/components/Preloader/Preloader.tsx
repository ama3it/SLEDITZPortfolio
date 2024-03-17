import "./Preloader.css";
import loadingGif from "../../assets/img/loader1.gif";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        
      }}
    >
      <img src={loadingGif} alt=""  />
    </div>
  );
};

export default Preloader;
