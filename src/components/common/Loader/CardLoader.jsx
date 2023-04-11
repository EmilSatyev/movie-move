import ContentLoader from "react-content-loader";

const CardLoader = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    viewBox="0 0 291 569"
    backgroundColor="#222128"
    foregroundColor="#36343f"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="291" height="415" />
    <rect x="0" y="480" rx="4" ry="4" width="150" height="35" />
    <rect x="0" y="535" rx="4" ry="4" width="60" height="35" />
  </ContentLoader>
);

export default CardLoader;