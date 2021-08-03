import { useRouter } from 'next/router';


//domain.com/news/[DynamicPath]  (Now a dynamic page for given ID's)

function BreakingPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to the backend API to
  // fetch the news item with the NewsId

  return <h1> The BREAKING News Page </h1>;
}

export default BreakingPage;
