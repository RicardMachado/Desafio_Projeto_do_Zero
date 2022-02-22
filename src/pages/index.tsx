import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

import { FiCalendar, FiUser } from 'react-icons/fi';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): ReactElement {
  return (
    <>
      <Head>
        <title>Spacetraveling | Home</title>
      </Head>
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <Image width={238.62} height={25.63} src="/logo.svg" alt="logo" />
          <Link href="/">
            <a>
              <strong>Como utilizar Hooks</strong>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <div className={styles.postMeta}>
                <time>
                  <FiCalendar />
                  22 fev 2022
                </time>
                <span>
                  <FiUser />
                  Ricardo Machado
                </span>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <strong>Como utilizar Hooks</strong>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <div className={styles.postMeta}>
                <time>
                  <FiCalendar />
                  22 fev 2022
                </time>
                <span>
                  <FiUser />
                  Ricardo Machado
                </span>
              </div>
            </a>
          </Link>
          <Link href="/">
            <a>
              <strong>Como utilizar Hooks</strong>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <div className={styles.postMeta}>
                <time>
                  <FiCalendar />
                  22 fev 2022
                </time>
                <span>
                  <FiUser />
                  Ricardo Machado
                </span>
              </div>
            </a>
          </Link>

          <button
            //onClick={()=>{}}
            type="button"
            className={styles.loadMoreButton}
          >
            Carregar mais posts
          </button>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
