
export async function getAllStrapiSlugs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/article/slug`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch slugs: ${res.statusText}`);
    }
    const data = await res.json();
    return data.map((item: any) => item.UID);
  } catch (error) {
    console.error("Error fetching slugs:", error);
    throw error;
  }
}
