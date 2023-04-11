import ContentLoader from "react-content-loader";

const ImageCardLoader = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 291 435"
    backgroundColor="#222128"
    foregroundColor="#36343f"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="291" height="435" />
  </ContentLoader>
);

export default ImageCardLoader;