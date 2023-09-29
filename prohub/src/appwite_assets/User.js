import { Client, Account } from "appwrite";

const client = new Client();
const account = new Account(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("651666416d9e57f8724a");

const OAuthGithub = () => {
  account.createOAuth2Session(
    "github",
    "https://prohub.netlify.app/",
    "http://localhost:3000"
  );
};

const GetAccountDetails = async (setUserSession) => {
  const promise = account.get();
  const session = await account.getSession("current");
  setUserSession(session.providerAccessToken);

  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

export { OAuthGithub, GetAccountDetails };
