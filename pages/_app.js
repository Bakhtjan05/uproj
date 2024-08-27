import React, { useState, useEffect } from "react";
import Router from "next/router"; // Импортируем Router из next/router
import "@/styles/globals.css";
import Head from "next/head";
import Loading from "@/src/components/Loading";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Когда приложение загружено, выключаем состояние загрузки
    setLoading(false);

    const handleRouteChange = (url) => {
      console.log("Route is changing...");
      setLoading(true);
    };

    const handleRouteComplete = (url) => {
      console.log("Route has completed.");
      setLoading(false);
    };

    // Подписываемся на события маршрутизации
    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteComplete);
    Router.events.on("routeChangeError", handleRouteComplete);

    // Убираем подписки, когда компонент размонтируется
    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
      Router.events.off("routeChangeComplete", handleRouteComplete);
      Router.events.off("routeChangeError", handleRouteComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.png" />
        {/* Другие мета-теги и ссылки */}
      </Head>
      <>
        {loading && <Loading />}
        <Component {...pageProps} />
      </>
    </>
  );
}
