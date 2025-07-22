import { useEffect, useState } from "react";

interface Post{
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchData() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const handleFetchPosts = async ()=>{
    try{
        const request = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response = await request.json()

        setPosts(response)
      } catch(err){
        console.error(err)
      }
  }

  useEffect(()=> {
    handleFetchPosts()
  },[])
  return (
    <div>
      <h1>Fetch Data Component</h1>
      <p>posts:</p>
      <ol>
        { posts?.map(e=>(
          <li key={e.id}>
            {e.title}
          </li>
        ))}
      </ol>
    </div>
  );
}