import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import two from "@/assets/4.png"
import Tel from "@/assets/Tel.png"
import WhatsApp from "@/assets/WhatsApp.png"
import Instagram from "@/assets/instagram.png"
import Facebook from "@/assets/facebook.png"
import Youtube from "@/assets/youtube.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>

              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate">
                  <a href="tel:9106836871"><img src={Tel} alt="Call 9106836871" style={{ width: '30px', height: '30px' }} /></a>
                </li>
                <li className="ftco-animate">
                  <a href="https://wa.me/919106836871?text=I'm%20inquiring%20about%20your%20services."
                    target="_blank"> <img alt="home-page-text" src={WhatsApp} style={{ width: '30px', height: '30px' }}></img></a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.instagram.com/fit_with_dr_vrunda_?igsh=dDlmZHRqczdsb3Zq"
                    target="_blank"><img alt="home-page-text" src={Instagram} style={{ width: '30px', height: '30px' }}></img> </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://www.facebook.com/tulsi.darji.9?mibextid=ZbWKwL"
                    target="_blank"><img alt="home-page-text" src={Facebook} style={{ width: '30px', height: '30px' }}></img> </a>
                </li>
                <li className="ftco-animate">
                  <a href="https://youtube.com/@drvrundadarji312?si=35s2SlyNCHo2ZIST"
                    target="_blank"><img alt="home-page-text" src={Youtube} style={{ width: '30px', height: '30px' }}></img> </a>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-sm">
              Personal coach to help you thrive.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              {/* <p>Learn More</p> */}
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        {/* <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={two} />
        </div> */}

        <div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-26 md:justify-items-end"
          style={{ width: '80%' }} /* Adjust as needed */
        >

          <img
            alt="home-pageGraphic"
            src={two}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

      </motion.div>

      {/* SPONSORS */}
      {/* {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Home;
