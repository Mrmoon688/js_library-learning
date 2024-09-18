import "./style.css";
// import "./node_modules/flowbite/dist/flowbite";
import { Modal } from "flowbite";
import Chart from "chart.js/auto";
import venoboxMin from "venobox";
import Typed from "typed.js";
// import Chart from 'chart.js/auto'

new venoboxMin({
  selector: ".aaa",
});

new venoboxMin({
  selector: ".slide",
});
const typed = new Typed("#elements", {
  strings: [`the world's potential`, "MMS IT.COM"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
  loopCount: 2,
});

// const watchMore = document.querySelector("#watchMore");

const heroModal = document.querySelector("#hero-modal");

const options = {
  placement: "bottom-right",
  backdrop: "dynamic",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  closable: true,
  onHide: () => {
    console.log("modal is hidden");
  },
  onShow: () => {
    console.log("modal is shown");
  },
  onToggle: () => {
    console.log("modal has been toggled");
  },
};

const instanceOptions = {
  id: "modalEl",
  override: true,
};

const modal = new Modal(heroModal, options, instanceOptions);

// options with default values

// instance options object

// watchMore.addEventListener("click", () => {
//   modal.show();
// });

// document.addEventListener("scroll", () => {
//   if (scrollY > 1100) {
//     modal.show();
//   }
// });

// const data = document.getElementById('myChart');

(async function () {
  const data = [
    { year: 2010, count: 30 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById("myChart"), {
    type: "polarArea",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions by year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
