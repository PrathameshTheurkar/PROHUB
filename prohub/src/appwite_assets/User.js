import { Client, Account } from "appwrite";

const client = new Client();
const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("651666416d9e57f8724a");

const OAuthGithub = (e) => {
  e.preventDefault();
  try {
    account
      .createOAuth2Session(
        "github",
        "http://localhost:3000",
        "http://localhost:2000"
      )
      .then(console.log("Done"));
  } catch (er) {
    console.log(er);
  }
};

export { OAuthGithub };
