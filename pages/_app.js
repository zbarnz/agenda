import Layout from "../components/Layout";
import Store  from "../context/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Store.Provider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Store.Provider>
  );
}

export default MyApp;
