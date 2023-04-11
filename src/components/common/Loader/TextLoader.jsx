import ContentLoader from "react-content-loader"

const TextLoader = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={120}
    viewBox="0 0 500 120"
    backgroundColor="#222128"
    foregroundColor="#36343f"
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="268" height="40" />
    <rect x="0" y="64" rx="4" ry="4" width="235" height="40" />
  </ContentLoader>
)

export default TextLoader;