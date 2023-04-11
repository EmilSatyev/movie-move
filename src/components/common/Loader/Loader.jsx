import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={130}
    height={62}
    viewBox="0 0 130 62"
    backgroundColor="#1A1820"
    foregroundColor="#322f39"
    {...props}
  >
    <rect x="0" y="31" rx="4" ry="4" width="91" height="16" />
    <rect x="0" y="0" rx="4" ry="4" width="130" height="16" />
  </ContentLoader>
)

export default Loader