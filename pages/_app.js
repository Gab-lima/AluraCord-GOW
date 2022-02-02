export default function MyApp({ Component, pageProps}) {
    console.log('Roda em todas as paginas!');
    return <Component {...pageProps}/>
}