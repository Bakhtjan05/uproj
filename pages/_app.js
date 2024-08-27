import React, { useState, useEffect } from "react";
import Router from "next/router";
import "@/styles/globals.css";
import Head from "next/head";
import Loading from "@/src/components/Loading";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minLoadingTime = 3000; // Минимальное время показа загрузочного экрана

    const handleLoad = () => {
      // Если страница загружена, ждем окончания минимального времени загрузки
      setTimeout(() => {
        setLoading(false);
      }, minLoadingTime);
    };

    // Подписываемся на события маршрутизации
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => handleLoad();

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeComplete);

    // Обработка полной загрузки страницы при первой загрузке
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      // Очищаем подписки
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeComplete);
      window.removeEventListener("load", handleLoad);
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
