//domain.com/news  (The landing page of news)
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
    return (
      <Fragment>
        <h1> The MAIN News Page </h1>
        <ul>
          <li>
            <Link href="/news/article1">Article 1</Link>
          </li>
          <li>
            <Link href="/news/article2">Article 2</Link>
          </li>
          <li>
            <Link href="/news/article3">Article 3</Link>
          </li>
        </ul>
      </Fragment>
    );
}

export default NewsPage;