import { notFound } from "next/navigation";

async function fetchArticle() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/article/slug`,
    {
      method: "GET",
    }
  );
  const data: any = await response.json();
  if (!response.ok) {
    return null;
  }
  return data.length > 0 ? data : null;
}

export default async function ArticlePage({
  params,
}: {
  params: { slugs: string };
}) {
  let { slugs } = params;
  const article = await fetchArticle();
  let articleData = article.find((item: any) => item?.id == slugs);
  if (!article) {
    notFound();
  }

  return (
    <div>
      {articleData ? (
        <>
          <h1>{articleData?.title}</h1>
          <p>{articleData?.Content}</p>
        </>
      ) : (
        "NO data"
      )}
    </div>
  );
}
