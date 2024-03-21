// Sample data of influencers
const influencers = [
    { name: "Influencer 1", image: "elvish.avif", followers: 10000 },
    { name: "Influencer 2", image: "", followers: 20000 },
    { name: "Influencer 3", image: "", followers: 30000 }
];

// Function to display influencers
function displayInfluencers() {
    const influencerList = document.getElementById("influencerList");
    influencerList.innerHTML = ""; // Clear previous data

    influencers.forEach((influencer) => {
        const influencerDiv = document.createElement("div");
        influencerDiv.classList.add("influencer");

        const influencerImage = document.createElement("img");
        influencerImage.src = influencer.image;
        influencerImage.alt = influencer.name;

        const influencerName = document.createElement("h3");
        influencerName.textContent = influencer.name;

        const influencerFollowers = document.createElement("p");
        influencerFollowers.textContent = `Followers ${influencer.followers}`;

        influencerDiv.appendChild(influencerImage);
        influencerDiv.appendChild(influencerName);
        influencerDiv.appendChild(influencerFollowers);

        influencerList.appendChild(influencerDiv);
    });
}

// Call function to display influencers when page loads
window.onload = displayInfluencers;