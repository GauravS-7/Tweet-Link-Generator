function tweetLinkGen() {
  const messageElement = document.getElementById("tweetMsg").value;
  const appElement = document.getElementById("app");

  const encodedMessage = encodeURIComponent(messageElement);

  const link = "https://twitter.com/intent/tweet" + "?text=" + encodedMessage;
  appElement.innerText = link;
}

const buttonElement = document.getElementById("genBtn");
buttonElement.addEventListener("click", tweetLinkGen);
