import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

document
  .querySelectorAll(".parallaxcontainermedflereelementer")
  .forEach((parallaxcontainer) => {
    const elementderskalparallaxes2 =
      parallaxcontainer.querySelector(".paragraf_01");
    scroll(animate(elementderskalparallaxes2, { y: [0, 800] }), {
      target: elementderskalparallaxes2,
    });
  });

scroll(
  animate(".scrollzoomimg", {
    scale: [1, 9],
  }),

  {
    target: document.querySelector(".scrollzoomimg"),

    offset: ["0.25 0.25", "1 1"],
  }
);

const lillevideo = document.querySelector("#videofil");
lillevideo.pause();

scroll(
  ({ y }) => {
    if (!lillevideo.readyState) return;
    lillevideo.currentTime = lillevideo.duration * y.progress;
  },
  {
    target: document.querySelector(".videoarticle"),
    offset: ["-100vh", "end end"],
  }
);
