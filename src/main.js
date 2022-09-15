import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

scroll(animate("h1", { y: [0, -12000] }));

scroll(animate(".test", { y: [-100, 0] }));

scroll(
  animate(".scrollzoomimg", {
    scale: [1, 8],
  }),

  {
    target: document.querySelector(".scrollzoomimg"),

    offset: ["0.80 0.80", "1 1"],
  }
);

scroll(
  animate(".scrollzoomimg_02", {
    scale: [1, 12],
  }),

  {
    target: document.querySelector(".scrollzoomimg_02"),

    offset: ["0.3 0.7", "1 1"],
  }
);

inView(".glow_01", () => {
  animate(".glow_01", { opacity: [0.8, 1] }, { delay: 0.5, duration: 1 });
});

inView(".glow_02", () => {
  animate(".glow_02", { opacity: [0.8, 1] }, { delay: 1.5, duration: 1 });
});

inView(".glow_03", () => {
  animate(".glow_03", { opacity: [0.8, 1] }, { delay: 0.5, duration: 1 });
});

inView(".glow_04", () => {
  animate(".roter_04", { opacity: [0.8, 1] }, { delay: 1.5, duration: 1 });
});

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

scroll(animate(".progress-bar", { scaleX: [0, 1] }));
