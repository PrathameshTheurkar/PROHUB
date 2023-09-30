import { Client, Databases, ID } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("651666416d9e57f8724a");

const databases = new Databases(client);

const createRepo = async (repoName, user) => {
  try {
    // Create a document

    const promise = databases.createDocument(
      "65166867265bb5fd9333",
      "65166875ecf86953ad9e",
      ID.unique(),
      {
        repoName,
        user,
      }
    );

    console.log("Document created successfully:", document);
    return document;
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

export { createRepo };
