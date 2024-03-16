import "./Preloader.css";
import loadingGif from "../../assets/img/loader.gif";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loadingGif} alt="" style={{ width: "50vw" }} />
    </div>
  );
};

export default Preloader;
