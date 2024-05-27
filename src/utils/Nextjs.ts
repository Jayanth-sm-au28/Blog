export async function getAllNextJsSlugs() {
    // Example: If slugs are stored in a JSON file
    const slugsObj = require('@/app/../../redirects.json');
    const slugs = Object.values(slugsObj); // Extract values (slugs) from the object
    return slugs;
  }