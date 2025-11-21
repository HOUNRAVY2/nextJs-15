// app/page.tsx or app/posts/page.tsx
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: { id: number; title: string }[] = await res.json();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
