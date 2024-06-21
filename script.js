document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const image = document.querySelector(".centered-img");
  const darkModeImage = document.getElementById("darkMode");
  const darkModeImageMobile = document.getElementById("darkMode-mobile");
  const header = document.getElementById("header");
  const link = document.querySelectorAll("a");
  const hero = document.querySelector(".hero");
  const project = document.querySelector(".projects");
  const footer = document.querySelectorAll("footer");

  const projects = document.querySelectorAll(".project");
  const dialogs = document.querySelectorAll("dialog");
  const closeButtons = document.querySelectorAll(".close-dialog");
  const redirectButton = document.querySelectorAll(".redirect-button");
  const closeButtonImg = document.querySelectorAll(".close-dialog-img");
  const footerButton = document.querySelectorAll(".button-footer");
  const footerLink = document.querySelectorAll(".button-link-footer");
  const linkedin = document.getElementById("linkedin");
  const instagram = document.getElementById("instagram");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const projectId = project.id;
      const dialog = document.getElementById(`dialog-${projectId}`);
      if (dialog) {
        dialog.showModal();
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("close");
      const dialog = button.closest("dialog");
      if (dialog) {
        dialog.close();
      }
    });
  });

  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    const updateCarousel = () => {
      images.forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
      });
    };

    const showNextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    };

    const showPrevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    };

    carousel.parentElement
      .querySelector(".next")
      .addEventListener("click", showNextImage);
    carousel.parentElement
      .querySelector(".prev")
      .addEventListener("click", showPrevImage);

    updateCarousel();
  });

  if (darkModeImage) {
    darkModeImage.addEventListener("click", changeMode);
  }

  if (darkModeImageMobile) {
    darkModeImageMobile.addEventListener("click", changeMode);
  }

  container.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const distanceX = Math.abs(rect.width / 2 - mouseX);
    const distanceY = Math.abs(rect.height / 2 - mouseY);
    const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

    if (distance <= rect.width) {
      const clipPathValue = `circle(125px at ${mouseX}px ${mouseY}px)`;
      image.style.clipPath = clipPathValue;
      image.style.opacity = "1";
    } else {
      image.style.opacity = "0";
    }
  });

  container.addEventListener("mouseleave", () => {
    image.style.clipPath = "circle(0% at 50% 50%)";
    image.style.opacity = "0";
  });

  let i = 1;
  function changeImage() {
    image.src = "/heroImages/pic" + i + ".png";
    if (i < 8) {
      i++;
    } else {
      i = 1;
    }
  }

  setInterval(changeImage, 2000);

  function changeMode() {
    //dark mode
    if (darkMode.src.includes("Moon.png")) {
      darkMode.src = "/images/Sun.png";
      darkModeImageMobile.src = "/images/Sun.png";
      header.style.background = "#0D0D0D";
      header.style.color = "#f1f1f1";
      link.forEach((a) => {
        a.style.color = "#f1f1f1";
      });
      hero.style.background = "#0D0D0D";
      hero.style.color = "#f1f1f1";
      project.style.background = "#0D0D0D";
      project.style.color = "#f1f1f1";
      footer.forEach((a) => {
        a.style.background = "#f1f1f1";
        a.style.color = "#0D0D0D";
      });
      dialogs.forEach((d) => {
        d.style.background = "#0b0b0b";
        d.style.color = "#f1f1f1";
      });
      redirectButton.forEach((r) => {
        r.style.background = "#0d0d0d";
        r.style.color = "#f1f1f1";
        r.style.border = "2px solid #f1f1f1";
      });
      footerButton.forEach((b) => {
        b.style.background = "#f1f1f1";
        b.style.color = "#0d0d0d";
        b.style.border = "2px solid #0d0d0d";
      });
      footerLink.forEach((l) => {
        l.style.color = "#0d0d0d";
      });
      closeButtons.forEach((b) => {
        b.style.background = "#0d0d0d";
      });
      closeButtonImg.forEach((i) => {
        i.src = "/images/x_w.png";
      });
      linkedin.src = "/icons/Linkedin_b.png";
      instagram.src = "/icons/Instagram_b.png";
      changeHoverColor(".project:hover", "#121212");
      changeHoverColor(".redirect-button:hover", "#1f1f1f");
      changeHoverColor(".button-footer:hover", "#dddddd");
    } else {
      //light mode
      darkMode.src = "/images/Moon.png";
      darkModeImageMobile.src = "/images/Moon.png";
      header.style.background = "#f1f1f1";
      header.style.color = "#0D0D0D";
      link.forEach((a) => {
        a.style.color = "#0D0D0D";
      });
      hero.style.background = "#f1f1f1";
      hero.style.color = "#0D0D0D";
      project.style.background = "#f1f1f1";
      project.style.color = "#0D0D0D";
      footer.forEach((a) => {
        a.style.background = "#0D0D0D";
        a.style.color = "#f1f1f1";
      });
      dialogs.forEach((d) => {
        d.style.background = "#f1f1f1";
        d.style.color = "#0d0d0d";
      });
      redirectButton.forEach((r) => {
        r.style.background = "#f1f1f1";
        r.style.color = "#0d0d0d";
        r.style.border = "2px solid #0d0d0d";
      });
      footerButton.forEach((b) => {
        b.style.background = "#0d0d0d";
        b.style.color = "#f1f1f1";
        b.style.border = "2px solid #f1f1f1";
      });
      footerLink.forEach((l) => {
        l.style.color = "#f1f1f1";
      });
      closeButtons.forEach((b) => {
        b.style.background = "#f1f1f1";
      });
      closeButtonImg.forEach((i) => {
        i.src = "/images/x.png";
      });
      linkedin.src = "/icons/Linkedin_w.png";
      instagram.src = "/icons/Instagram_w.png";
      changeHoverColor(".project:hover", "#e7e7e7");
      changeHoverColor(".redirect-button:hover", "#dddddd");
      changeHoverColor(".button-footer:hover", "#1f1f1f");
    }
  }

  function changeHoverColor(selector, newColor) {
    let found = false;

    // Iterate over all stylesheets
    for (let i = 0; i < document.styleSheets.length; i++) {
      let styleSheet = document.styleSheets[i];

      try {
        // Iterate over all rules in the stylesheet
        for (let j = 0; j < styleSheet.cssRules.length; j++) {
          let rule = styleSheet.cssRules[j];

          // Check if the rule is the one we're looking for
          if (rule.selectorText === selector) {
            console.log(`Found ${selector} rule.`);
            // Change the background color of the rule
            rule.style.setProperty("background-color", newColor, "important");
            found = true;
            console.log(`Changed ${selector} background color to ${newColor}.`);
            break;
          }
        }
      } catch (e) {
        // Handle any potential cross-origin restrictions
        console.error("Error accessing stylesheet:", e);
      }

      if (found) break;
    }

    // If the rule was not found, create a new one
    if (!found) {
      console.log(`Rule for ${selector} not found. Creating new rule.`);
      let styleSheet = document.styleSheets[0];
      styleSheet.insertRule(
        `${selector} { background-color: ${newColor} !important; }`,
        styleSheet.cssRules.length
      );
      console.log(
        `Inserted new rule: ${selector} { background-color: ${newColor} !important; }`
      );
    }
  }
});
