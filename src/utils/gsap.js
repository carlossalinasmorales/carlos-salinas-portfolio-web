import gsap from "gsap";

export function fadeIn(el) {
  gsap.from(el, { opacity: 0, y: 30, duration: 1 });
}

export default gsap;