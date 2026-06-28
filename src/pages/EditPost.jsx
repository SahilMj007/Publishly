import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import appWriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
const EditPost = () => {
  const [post, setPost] = useState([]);
  const { documentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Edit | Publishly";
  }, []);
  useEffect(() => {
    if (documentId) {
      appWriteService.getPost(documentId).then((response) => {
        if (response) {
          setPost(response);
        }
      });
    } else {
      navigate("/");
    }
  }, [documentId, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
