export function slugify(str) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatArticles(
  articles,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredArticles = articles.reduce((acc, article) => {
    const { date, draft } = article.frontmatter;

    if (filterOutDrafts && draft) return acc;

    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    acc.push(article);

    return acc;
  }, []);
  if (sortByDate) {
    filteredArticles.sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );
  } else {
    filteredArticles.sort(() => Math.random() - 0.5);
  }

  if (typeof limit === "number") {
    return filteredArticles.slice(0, limit);
  }
  return filteredArticles;
}
