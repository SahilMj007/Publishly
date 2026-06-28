import React, { useEffect, useState } from "react";
import appWriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteService.getAllPosts().then((response) => {
      if (response) {
        setPosts(response.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    useEffect(() => {
      document.title = "Home | SmartAlign";
    }, []);
    return (
      <section className="min-h-[80vh] bg-slate-950 py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-12 text-center shadow-2xl">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Welcome to Publishly!
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
              Read articles from the community, publish your own content, and
              manage your posts modern blogging experience.
            </p>

            <div className="mt-10 rounded-xl border border-slate-700 bg-slate-800 px-6 py-5">
              <h2 className="text-xl font-semibold text-white">
                No Posts Found
              </h2>

              <p className="mt-2 text-slate-400">
                Login to start reading and publishing posts.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  useEffect(() => {
    document.title = "Home | Publishly";
  }, []);
  return (
    <section className="min-h-screen bg-slate-950 py-16">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Latest Posts
          </h1>

          <p className="mt-3 text-slate-400">
            Explore the newest articles published by the community.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post.$id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Home;
