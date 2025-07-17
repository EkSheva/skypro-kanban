const Loader = ({ width = 220, height = 130 }) => {
  return (
    <div
      className="loader"
      style={{ width: width + "px", height: height + "px" }}
    ></div>
  );
};
export default Loader;
