import ActionButton from "@/shared/ActionButton";
import Benefit from "./Benefit";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Ut etiam sit amet nisl. Volutpat odio facilisis mauris sit amet. Convallis tellus id interdum velit.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Risus ultricies tristique nulla aliquet. Cras fermentum odio eu feugiat pretium nibh ipsum consequat.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Sit amet aliquam id diam maecenas ultricies mi. Massa ultricies mi quis hendrerit dolor magna eget.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefit)}>
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-stretch justify-between gap-8 mt-5"
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Integer feugiat scelerisque varius morbi. Ultrices dui sapien
                eget mi proin sed libero enim sed. Netus et malesuada fames ac
                turpis egestas. Sollicitudin ac orci phasellus egestas tellus.
                Cursus metus aliquam eleifend mi in nulla. Felis imperdiet proin
                fermentum leo vel orci porta non pulvinar. Diam sit amet nisl
                suscipit adipiscing bibendum est. Interdum varius sit amet
                mattis vulputate enim nulla aliquet. Gravida neque convallis a
                cras. In fermentum posuere urna nec tincidunt praesent. Leo
                integer malesuada nunc vel risus commodo. Dignissim diam quis
                enim lobortis scelerisque fermentum dui faucibus.
              </p>
              <p className="mb-5">
                Egestas erat imperdiet sed euismod nisi porta. Tortor pretium
                viverra suspendisse potenti. A condimentum vitae sapien
                pellentesque habitant morbi tristique senectus. Vitae semper
                quis lectus nulla at volutpat diam ut. Amet mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar. Tempus egestas sed sed
                risus pretium quam vulputate. Ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis a. Blandit cursus risus at
                ultrices mi tempus imperdiet. Venenatis cras sed felis eget
                velit aliquet sagittis id consectetur. Hac habitasse platea
                dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
                Enim diam vulputate ut pharetra sit amet aliquam id. Ac
                tincidunt vitae semper quis. Ut pharetra sit amet aliquam id
                diam maecenas.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
