import '@/styles/globals.css';
import { Noto_Sans_JP } from 'next/font/google';

 const noto = Noto_Sans_JP({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-noto' });

export default function App({ Component, pageProps }) {
 return (
    <div className={`${noto.variable}`}>
     <Component {...pageProps} />
   </div>
 );
}