import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";

export default function Post() {
  const [post, setPost] = useState(null);

  const { documentId } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (documentId) {
      appwriteService.getPost(documentId).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
    document.title = "Post | Publishly";
  }, [documentId, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.image);
        navigate("/");
      }
    });
  };

  if (!post) return null;

  return (
    <section className="min-h-screen bg-slate-950 py-12">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                {post.title}
              </h1>

              <p className="mt-3 text-sm text-slate-400">Published Article</p>
            </div>

            {isAuthor && (
              <div className="flex gap-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-emerald-600"
                    activeBgColor="active:bg-emerald-700"
                  >
                    Edit
                  </Button>
                </Link>

                <Button
                  bgColor="bg-red-600"
                  activeBgColor="active:bg-red-700"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          <div className="mb-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
            <div className="flex justify-center p-6">
              <img
                src={appwriteService.filePreview(post.image)}
                alt={post.title}
                className="max-h-150 w-auto max-w-full rounded-xl object-contain"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
            <div className="leading-8 text-slate-300 [&_h1]:mb-6 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-white [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-white [&_p]:mb-6 [&_a]:text-blue-400 [&_a:hover]:text-blue-300 [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_img]:mx-auto [&_img]:my-8 [&_img]:rounded-xl [&_img]:shadow-lg [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
