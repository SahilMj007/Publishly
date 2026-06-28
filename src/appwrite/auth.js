import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setProject(conf.appWriteProjectID)
      .setEndpoint(conf.appWriteUrl);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });

      if (userAccount) {
        return this.login({ email, password });
      } else {
        console.error("There is Some Error While Creating User Account");
      }
    } catch (error) {
      console.error(
        `There is SOme Error While Creating User Account :: ${error}`,
      );
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(`There is Some Error While Login User :: ${error}`);
    }
    return null;
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      return null;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error(`There is Some Error While Logout User :: ${error}`);
    }
  }
}

const authService = new AuthService();
export default authService;
