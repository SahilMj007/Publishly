import React from "react";
import { Link } from "react-router-dom";
import appWriteService from "../appwrite/config";

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.$id}`} className="group block h-full">
      <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-slate-700 hover:shadow-2xl">
        <div className="overflow-hidden rounded-t-2xl bg-slate-950 p-4">
          <img
            src={appWriteService.filePreview(post.image)}
            alt={post.title}
            className="mx-auto h-48 w-auto rounded-xl object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h2 className="line-clamp-2 text-xl font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-blue-400">
            {post.title}
          </h2>

          <div className="mt-5 flex items-center justify-between">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
              Article
            </span>

            <span className="text-sm text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
