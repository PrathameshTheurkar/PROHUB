import React, { useState } from "react";

const CreateRepo = () => {
  const [repoName, setRepoName] = useState("");
  const [repoURL, setRepoURL] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRepoNameChange = (event) => {
    setRepoName(event.target.value);
  };

  const handleCreateRepo = async () => {
    // try {
    //   const createdRepo = await createGitHubRepository(repoName);
    //   setRepoURL(createdRepo.html_url);
    //   setIsModalVisible(false); // Close the modal after successful repo creation
    // } catch (error) {
    //   console.error("Error creating repository:", error);
    // }
  };

  return (
    <div>
      <h1>Create GitHub Repository</h1>
      <button onClick={() => setIsModalVisible(true)}>
        Open Repository Creation Form
      </button>

      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalVisible(false)}>
              &times;
            </span>
            <label htmlFor="repoName">Repository Name:</label>
            <input
              type="text"
              id="repoName"
              value={repoName}
              onChange={handleRepoNameChange}
            />
            <button onClick={handleCreateRepo}>Create Repository</button>

            {repoURL && (
              <div>
                Repository created! Here's the URL:{" "}
                <a href={repoURL} target="_blank" rel="noopener noreferrer">
                  {repoURL}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateRepo;
