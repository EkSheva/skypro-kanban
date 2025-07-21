const Loader = ({
  width = 220,
  height = 130,
  borderRadius = 0,
  marginBottom = 15,
}) => {
  return (
    <div
      className="loader"
      style={{
        width: width + "px",
        height: height + "px",
        borderRadius: borderRadius + "px",
        marginBottom: marginBottom + "px",
      }}
    ></div>
  );
};
export default Loader;
