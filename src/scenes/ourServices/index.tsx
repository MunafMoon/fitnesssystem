
import { useState, useEffect, useRef } from "react";
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

import image7 from "@/assets/image7.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import ActionButton from "@/shared/ActionButton";

const services: Array<ClassType> = [
  {
    name: "Weight loss",
    description:"" ,
    image: image7,
  },
  {
    name: "Weight gain",
    image: image2,
  },
  {
    name: "Joints health",
    description:"",
    image: image3,
  },
  {
    name: "Heart healths",
    description: "",
    image: image4,
  },
  {
    name: "Skin health",
    image: image5,
  },
  {
    name: "Men's health",
    description: "",
    image: image6,
  },
  {
    name: "Women's healths",
    description: "",
    image: image4,
  },
  {
    name: "Child health",
    image: image5,
  },
  {
    name: "Digestive health",
    description: "",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurServices = ({ setSelectedPage }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollStep = 300; // Amount of pixels to scroll on each step
  const scrollDelay = 3000; // Delay between each scroll in milliseconds

  // Auto-slide functionality
  useEffect(() => {
    const container = containerRef.current;

    const slideInterval = setInterval(() => {
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const newScrollPosition = scrollPosition + scrollStep;

        // Scroll the container to the new position or reset to 0 if max is reached
        if (newScrollPosition >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          setScrollPosition(0);
        } else {
          container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
          setScrollPosition(newScrollPosition);
        }
      }
    }, scrollDelay);

    return () => clearInterval(slideInterval);
  }, [scrollPosition]);

  return (
    <section id="ourservices" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR SERVICES</HText>
            {/* <div className="row">
              <div className="column">
                <div className="card">
                  <h3>Weight loss</h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3>Weight gain</h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3> Joints health </h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3> Heart health </h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3> Skin health </h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3>Men's health </h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3>Women's health </h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3> Child health </h3>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <h3>Digestive healt </h3>
                </div>
              </div>
            </div> */}
            <p className="py-5">
              {/* <p>
                Are you struggling with weight issues or any other health issues or wants to improve your lifestyle??
              </p>
              &nbsp;
              <p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
                   &nbsp; how to live your best life & attain good health.
              </p>
                &nbsp;
              <p>
                We will teach you how you can attain your ideal weight , without fad diets or crash diet. Naturally with good nutrition & to sustain it overtime .
              </p> */}
            </p>
          </div>
        </motion.div>
        <div
          ref={containerRef} // Reference to the scrollable container
          className="mt-10 h-[353px] w-full overflow-x-hidden overflow-y-hidden"
        >
          <ul className="w-[2800px] whitespace-nowrap">
            {services.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;

// import { SelectedPage, ClassType } from "@/shared/types";
// import image1 from "@/assets/image1.png";
// import image2 from "@/assets/image2.png";
// import image3 from "@/assets/image3.png";
// import image4 from "@/assets/image4.png";
// import image5 from "@/assets/image5.png";
// import image6 from "@/assets/image6.png";
// import { motion } from "framer-motion";
// import HText from "@/shared/HText";
// import Class from "./Class";

// const classes: Array<ClassType> = [
//   {
//     name: "Weight Training Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image1,
//   },
//   {
//     name: "Yoga Classes",
//     image: image2,
//   },
//   {
//     name: "Ab Core Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image3,
//   },
//   {
//     name: "Adventure Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image4,
//   },
//   {
//     name: "Fitness Classes",
//     image: image5,
//   },
//   {
//     name: "Training Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image6,
//   },
// ];

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

// const OurClasses = ({ setSelectedPage }: Props) => {
//   return (
//     <section id="ourclasses" className="w-full bg-primary-100 py-40">
//       <motion.div
//         onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
//       >
//         <motion.div
//           className="mx-auto w-5/6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5 }}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0 },
//           }}
//         >
//           <div className="md:w-3/5">
//             <HText>OUR CLASSES</HText>
//             <p className="py-5">
//               Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
//               tellus quam porttitor. Mauris velit euismod elementum arcu neque
//               facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
//               enim mattis odio in risus nunc.
//             </p>
//           </div>
//         </motion.div>
//         <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
//           <ul className="w-[2800px] whitespace-nowrap">
//             {classes.map((item: ClassType, index) => (
//               <Class
//                 key={`${item.name}-${index}`}
//                 name={item.name}
//                 description={item.description}
//                 image={item.image}
//               />
//             ))}
//           </ul>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default OurClasses;
