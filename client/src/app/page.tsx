import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <div className='home'>
        <figure>
          <Image
            src='https://static.octopuscdn.com/logos/logo.svg'
            alt='Octopus Energy Logo'
            width={200}
            height={200}
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend code test!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{' '}
          <code>client/pages/product.js</code>
        </p>
      </div>
    </main>
  );
}
