import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pump It Up!</title>
        <meta name="description" content="Go to the fucking gym!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 data-testid="welcome-header" className='text-3xl font-bold underline'>
          Hello there!
        </h1>

        <p  data-testid="welcome-text">
          Lets get started and create a workout program for you.
        </p>

        <Link href="/workouts" data-testid="welcome-start-program">Start a new workout program</Link>
      </main>

      <footer></footer>
    </div>
  )
}
