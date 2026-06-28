import React, { useEffect, useState } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteService.getAllPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  useEffect(() => {
    document.title = "All Posts | Publishly";
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <Container>
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white">
              All Posts
            </h1>

            <p className="mt-2 text-slate-400">
              Browse all published articles from the community.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">
            <span className="text-sm text-slate-400">Total Posts</span>

            <h2 className="text-2xl font-bold text-white">{posts.length}</h2>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="flex min-h-[50vh] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">
                No Posts Available
              </h2>

              <p className="mt-3 text-slate-400">
                Published posts will appear here.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <PostCard key={post.$id} post={post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default AllPosts;
