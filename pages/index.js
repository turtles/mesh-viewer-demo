import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Editor from '../components/editor';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mesh Viewer Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/background.jpg" className={styles.backdrop} />

      <main>
        <Editor />
      </main>

      <footer>
        Mousewheel: Zoom<br />
        Left click (drag): Rotate scene<br />
        <br />
        <span className={styles.credits}>
          Three.js + React demo <br /><br />
          Created by Leah Sandacz  <a target="_blank" href="https://github.com/turtles">github.com/turtles</a>
          <br /><br />
          Computer model <a target="_blank" href="https://skfb.ly/6WCSn">"PC-9801UX"</a> by darekagomi is licensed under <a target="_blank" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution</a>.
        </span>
        <br />
      </footer>
      <style jsx>{`
        main {
          flex: 1 1 auto;
          overflow: hidden;
        }
        footer {
          width: 80%;
          min-width: 100px;
          max-width: 320px;
          position: absolute;
          padding: 4px;
          font-size: 14px;
          left: 2%;
          bottom: 2%;
          color: white;
          border-radius: 4px;
          background: black;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          font-size: 12px;
          color: white;
          text-decoration: none;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          height: 100%;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        #__next { // root component of next app
          height: 100%;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
