import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'Latest posts',
//   description: 'These are the latest posts.',
// }

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}

export async function generateMetadata() {
  const posts = await getPosts();
  return {
    title: `${posts.length} Posts`,
    description: 'These are the latest posts.',
  }
}
