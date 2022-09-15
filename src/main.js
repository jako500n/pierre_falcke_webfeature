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
    scale: [1, 8],
  }),

  {
    target: document.querySelector(".scrollzoomimg"),

    offset: ["0.80 0.80", "1 1"],
  }
);

// document.querySelectorAll(".tekstboks_snap").forEach((tekstboks) => {
//   const header = tekstboks.querySelector(".tekstboks_bgpurple");
//   scroll(animate(header, { y: [-100, 50] }), {
//     target: header,
//   });
// });

// document.querySelectorAll(".tekstboks_snap_02").forEach((tekstboks) => {
//   const header = tekstboks.querySelector(".tekstboks_bgpurple");
//   scroll(animate(header, { y: [50, 50] }), {
//     target: header,
//   });
// });

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

inView(".lomostagger", ({ target }) => {
  animate(
    ".staggeranimation li",
    { opacity: [0, 1] },
    {
      delay: stagger(1, { start: 2 }),
    }
  );
});
