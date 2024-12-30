document.getElementById("joinCommunityForm").onsubmit = function (event)
 {
    event.preventDefault(); 
    let username = document.getElementById("username").value;
    let message = document.createElement("p");
    message.textContent = "Welcome to the community, " + username + "!";
    let formContainer = document.querySelector(".join-community");
    formContainer.appendChild(message);
    this.reset();
};
