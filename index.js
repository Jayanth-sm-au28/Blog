const { Redis } = require('@upstash/redis');

const redis = new Redis({
  url: process.env.NEXT_UPSTASH_REDIS_URL,
  token: process.env.NEXT_UPSTASH_REDIS_TOKEN,
});

const insertRedirects = async () => {
  const commands = [];
  for (let i = 1001; i <= 10000; i++) {
    commands.push(redis.set(i.toString(), `/posts/${i}`));
  }
  await Promise.all(commands);
  console.log('Dynamic redirects inserted successfully.');
};

insertRedirects().catch((err) => console.error('Error inserting redirects:', err));
