function uploadImage() {
  const name = document.getElementById("name").value;
  const imageUrl = document.getElementById("imageUrl").value;

  if (!name || !imageUrl) {
    alert("Please enter a name and image URL");
    return;
  }

  axios
    .post("http://localhost:3000/images/upload", { name, imageUrl })
    .then((response) => {
      console.log(response.data);
      alert("Image uploaded successfully");
      fetchImages();
    })
    .catch((error) => {
      console.error(error);
      alert("Error uploading image");
    });
}

function fetchImages() {
  axios
    .get("http://localhost:3000/images")
    .then((response) => {
      const images = response.data;
      const imageContainer = document.getElementById("imageContainer");
      imageContainer.innerHTML = "";
      images.forEach((image) => {
        const imgContainer = document.createElement("div"); 
        const imgElement = document.createElement("img");
        imgElement.src = image.imageUrl;
        imgElement.alt = image.name;
        imgContainer.appendChild(imgElement);

        const commentInput = document.createElement("input");
        commentInput.type = "text"; 
        commentInput.placeholder = "Enter your comment"; 
        imgContainer.appendChild(commentInput);

        const commentButton = document.createElement("button");
        commentButton.textContent = "Comment";
        commentButton.onclick = function () {
          const comment = commentInput.value;
          if (!comment) {
            alert("Please enter a comment");
            return;
          }
          axios
            .post(`http://localhost:3000/images/${image.id}/comment`, {
              comment,
            })
            .then((response) => {
              console.log(response.data);
              alert("Comment posted successfully");
              fetchComments(image.id, commentsContainer); 
            })
            .catch((error) => {
              console.error(error);
              alert("Error posting comment");
            });
          commentInput.value = ""; 
        };
        imgContainer.appendChild(commentButton);

        const commentsContainer = document.createElement("ul"); 
        imgContainer.appendChild(commentsContainer); 

        imageContainer.appendChild(imgContainer);

        
        fetchComments(image.id, commentsContainer);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error fetching images");
    });
}

function fetchComments(imageId, commentsContainer) {
  axios
    .get(`http://localhost:3000/images/${imageId}/comments`)
    .then((response) => {
      const comments = response.data.comments;
      commentsContainer.innerHTML = ""; // Clear previous comments
      comments.forEach((comment) => {
        const commentElement = document.createElement("li"); // Create a list item for each comment
        commentElement.textContent = comment.text;
        commentsContainer.appendChild(commentElement);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error fetching comments");
    });
}

fetchImages();
