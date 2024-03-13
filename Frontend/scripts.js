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
        const imgElement = document.createElement("img");
        imgElement.src = image.imageUrl;
        imgElement.alt = image.name;
        imageContainer.appendChild(imgElement);

        
        const commentButton = document.createElement("button");
        commentButton.textContent = "Comment";
        commentButton.onclick = function () {
          
          alert("Comment button clicked for image: " + image.name);
        };
        imageContainer.appendChild(commentButton);
      });
    })
    .catch((error) => {
      console.error(error);
      alert("Error fetching images");
    });
}

fetchImages();
