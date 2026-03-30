import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const PageMeta = ({ title, description, keywords, canonical }: Props) => {
  const location = useLocation();
  const baseUrl = "https://www.nithyasafeguard.in";
  const canonicalUrl = canonical || `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default PageMeta;
