import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, SelectButton } from "../index";
import appWriteService from "../../appwrite/config";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const { register, handleSubmit, watch, control, setValue, getValues, reset } =
    useForm({
      defaultValues: {
        title: "",
        slug: "",
        content: "",
        status: "active",
      },
    });

  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        slug: slugTransform(post.title),
        content: post.content,
        status: post.status,
      });
    }
  }, [post, reset]);

  const submit = async (data) => {
    try {
      if (post) {
        let file = null;

        if (data.image?.[0]) {
          file = await appWriteService.uploadFile(data.image[0]);
        }

        const dbData = await appWriteService.updatePost(post.$id, {
          ...data,
          image: file ? file.$id : post.image,
        });

        if (file) {
          await appWriteService.deleteFile(post.image);
        }

        if (dbData) {
          navigate(`/post/${dbData.$id}`);
        }
      } else {
        const file = await appWriteService.uploadFile(data.image[0]);

        if (file) {
          const dbData = await appWriteService.createPost({
            ...data,
            image: file.$id,
            userId: userData.$id,
          });

          if (dbData) {
            navigate(`/post/${dbData.$id}`);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s+/g, "-");
    }

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12"
    >
      <div className="lg:col-span-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            {post ? "Edit Post" : "Create New Post"}
          </h2>

          <Input
            label="Title"
            placeholder="Enter post title"
            className="mb-6"
            {...register("title", { required: true })}
          />

          <Input
            label="Slug"
            placeholder="Post slug"
            className="mb-6"
            {...register("slug", { required: true })}
            onInput={(e) =>
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              })
            }
          />

          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Publishing
          </h3>

          <div className="mb-6">
            <Input
              label="Featured Image"
              type="file"
              accept="image/png,image/jpg,image/jpeg,image/gif"
              {...register("image", { required: !post })}
            />
          </div>

          {post && (
            <div className="mb-6 overflow-hidden rounded-xl border border-slate-200">
              <img
                src={appWriteService.filePreview(post.image)}
                alt={post.title}
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          )}

          <div className="mb-8">
            <SelectButton
              options={["active", "inactive"]}
              label="Status"
              {...register("status", { required: true })}
            />
          </div>

          <Button
            type="submit"
            bgColor={post ? "bg-emerald-600" : "bg-blue-600"}
            className="w-full rounded-xl py-3 text-base font-semibold transition-all duration-300 hover:shadow-lg"
          >
            {post ? "Update Post" : "Publish Post"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
