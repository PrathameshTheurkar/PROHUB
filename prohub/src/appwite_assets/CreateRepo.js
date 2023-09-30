// import { Client, Account } from "appwrite";

// const client = new Client();
// const account = new Account(client);

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("651666416d9e57f8724a");

// const createGitHubRepository = async (repoName) => {
//   try {
//     // Get the access token from the user session
//     const session = await account.getSession("current");
//     const accessToken = session?.providerAccessToken;

//     if (!accessToken) {
//       throw new Error("Access token not available. Please authenticate.");
//     }

//     const response = await fetch("https://api.github.com/user/repos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//       body: JSON.stringify({
//         name: repoName,
//         private: true,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(
//         `Failed to create GitHub repository: ${response.statusText}`
//       );
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error creating GitHub repository:", error);
//     throw error;
//   }
// };

// export default createGitHubRepository;
