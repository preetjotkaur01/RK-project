// marriage

if (window.location.href.includes("marriage")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData1.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item,i) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");
      
        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        console.log(carouselData[i].src)
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//dimension 
if (window.location.href.includes("dimension")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData2.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//early

if (window.location.href.includes("early")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData3.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//fish

if (window.location.href.includes("fish")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData4.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//hills

if (window.location.href.includes("hills")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData5.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//lovers

if (window.location.href.includes("lovers")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData6.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//mystic

if (window.location.href.includes("mystic")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData7.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//owl

if (window.location.href.includes("owl")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData8.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//paintings

if (window.location.href.includes("paintings")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData9.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//toda

if (window.location.href.includes("toda")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData10.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//whale

if (window.location.href.includes("whale")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData11.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

//woodcut
if (window.location.href.includes("woodcut")) {
  setTimeout(() => {
    const parent = document.querySelector("#image-track");
    const newElements = carouselData12.map(
      (item) =>
        `<div class="image-container" id="img-${item.id}"><img class="image"  src="${item.src}" draggable="false" />
        </div>`
        
    );
    parent.innerHTML = newElements.join("");

    document.querySelectorAll(".image-container").forEach((item) => {
      item.addEventListener("click", function () {
        var modal = document.getElementById("myModal");
        var nav = document.querySelector(".navbar");

        var modalImg = document.getElementById("img-modal");

        modal.style.display = "block";
        modalImg.src = item.firstChild.src;
        nav.style.display = "none";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        console.log(span, "span");
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          console.log("hello", modal.style.display);
          modal.style.display = "none";
          nav.style.display = "block";
        };
      });
    });
  }, 50);
}

// Project end


if (window.location.href.includes("description")) {
  setTimeout(() => {
    const text = window.location.href;
    const regex = /id=(\d+)/;
    const match = text.match(regex);

    const selectedId = match ? match[1] : null;

    const selectedArtwork = carouselData.find((item) => item.id == selectedId);

    if (selectedArtwork) {
      const sectionElement = document.querySelector(".description-page");
      if (sectionElement) {
        sectionElement.innerHTML = `
          <div  class="title-div">${selectedArtwork.name}</div>
          <div class="desc-div">${selectedArtwork.desc}</div>
          <img src="${selectedArtwork.src}" class="img-desc-div" />
        `;
      }
    }
  }, 50);
}

