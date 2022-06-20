import Head from "next/head";
const PageHead = (props) => {
  const { header } = props;
  return (
    <Head>
      <title>{header}</title>
    </Head>
  );
};
export default PageHead;
