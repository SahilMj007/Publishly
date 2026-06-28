import React from "react";
import { Container, PostForm } from "../components/index";
import { useEffect } from "react";
const AddPost = () => {
  useEffect(() => {
    document.title = "Add-Post | Publishly";
  }, []);
  return (
    <Container>
      <PostForm />
    </Container>
  );
};

export default AddPost;
