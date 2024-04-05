particlesJS("particles-js", {
    particles: {
      number: { value: 160, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 40,
        color: "#ffffff",
        opacity: 0.4,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 },
      },
    },

    retina_detect: true,
  });