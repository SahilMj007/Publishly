import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client()
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectID);
  databases;
  storage;

  constructor() {
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, content, image, status, userId }) {
    try {
      return await this.databases.createDocument({
        databaseId: conf.appWriteDataBaseId,
        collectionId: conf.appWriteCollectionId,
        documentId: ID.unique(),
        data: {
          title,
          content,
          image,
          status,
          userId,
        },
      });
    } catch (error) {
      console.error(`There is Some Error While Creating DataBase :: ${error}`);
    }
  }

  async updatePost(documentId, { title, content, image, status }) {
    try {
      return await this.databases.updateDocument({
        databaseId: conf.appWriteDataBaseId,
        collectionId: conf.appWriteCollectionId,
        documentId,
        data: {
          title,
          content,
          image,
          status,
        },
      });
    } catch (error) {
      console.error(`There is Some Error While Updating Post :: ${error}`);
    }
  }

  async deletePost(documentId) {
    try {
      await this.databases.deleteDocument({
        databaseId: conf.appWriteDataBaseId,
        collectionId: conf.appWriteCollectionId,
        documentId,
      });
      return true;
    } catch (error) {
      console.error(`There is Some Error While Deleting Data :: ${error}`);
      return false;
    }
  }

  async getPost(documentId) {
    try {
      return await this.databases.getDocument({
        databaseId: conf.appWriteDataBaseId,
        collectionId: conf.appWriteCollectionId,
        documentId,
      });
    } catch (error) {
      console.error(`There is Some Issue While Getting Data :: ${error}`);
      return false;
    }
  }

  async getAllPosts() {
    try {
      return await this.databases.listDocuments({
        databaseId: conf.appWriteDataBaseId,
        collectionId: conf.appWriteCollectionId,
        queries: [Query.equal("status", "active")],
      });
    } catch (error) {
      console.error(`There is Some Error While Getting All Posts ::`, error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile({
        bucketId: conf.appWriteBucketId,
        fileId: ID.unique(),
        file,
      });
    } catch (error) {
      console.error("There is Some Error While Uploading File ::", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile({
        bucketId: conf.appWriteBucketId,
        fileId,
      });
      return true;
    } catch (error) {
      console.error(`There is Some Error While Deleting File:: ${error}`);
      return false;
    }
  }

  filePreview(fileId) {
    try {
      return this.storage.getFileView({
        bucketId: conf.appWriteBucketId,
        fileId: fileId,
      });
    } catch (error) {
      console.error(
        `There is Some Error While Getting Preview File :: ${error}`,
      );
    }
  }
}

const service = new Service();
export default service;
