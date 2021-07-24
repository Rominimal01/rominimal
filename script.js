import { podcasts } from "./podcasts.js";
import { events } from "./events.js";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const menuItem = document.querySelectorAll(".navbar-link");
  const nav = document.querySelector(".navbar-links");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    // Set the body position to fixed when burger clicked
    burger.style.position = "fixed";

    //Burger animation
    burger.classList.toggle("toggle");
  });

  // Add an EventListener to every item/link
  Array.from(menuItem).forEach((item) => {
    item.addEventListener("click", function () {
      nav.classList.toggle("nav-active");

      burger.style.position = "";

      //Burger animation
      burger.classList.toggle("toggle");
    });
  });
};

navSlide();

// Podcasts
const PodcastGenerator = ({ namePod, imgPod, audioSrc }) => {
  const podcastsDiv = document.querySelector(".podcasts-div");

  var div = document.createElement("div");
  div.className = "podcast";

  div.innerHTML = `
    <div class="name-podcast">
        <p class="text">${namePod}</p>
    </div>
    <div class="cover-podcast">
        <img src=${imgPod} alt=${namePod}>
    </div>
    <div class="audio-podcast">
        <audio controls="controls">
            <source
                src=${audioSrc}>
        </audio>
    </div>
  `;

  podcastsDiv.appendChild(div);
};

const showPodcasts = (podcasts) => {
  podcasts.map((podcast) => {
    PodcastGenerator(podcast);
  });
};

showPodcasts(podcasts);

// Events
const EventsGenerator = ({
  dateEvent,
  hoursEvent,
  imgEvent,
  nameEvent,
  locationEvent,
}) => {
  const eventsDiv = document.querySelector(".events-div");

  var div = document.createElement("div");
  div.className = "event";

  div.innerHTML = `
            <div class="event-cover">
              <div class="event-date">
                <div class="date">
                  <p class="text">${dateEvent}</p>
                </div>
                <div class="hours">
                  <img src="./assets/icons/clock.png" alt="Clock Icon" />
                  <p class="small-text">${hoursEvent}</p>
                </div>
              </div>
              <img src=${imgEvent} alt=${nameEvent} />
            </div>
            <div class="event-info">
              <div class="event-name">
                <p class="text">${nameEvent}</p>
              </div>
              <div class="location">
                <img
                  src="./assets/icons/map-marker-alt.png"
                  alt="Map Marker Logo"
                />
                <p class="small-text">${locationEvent}</p>
              </div>
            </div>
          `;

  eventsDiv.appendChild(div);
};

const showEvents = (events) => {
  events.map((event) => {
    EventsGenerator(event);
  });
};

showEvents(events);
