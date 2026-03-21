import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

const PageMeta = ({ title, description, keywords, canonical }: Props) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default PageMeta;
