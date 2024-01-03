import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ClassType } from "@/shared/types";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Facilisi morbi tempus iaculis urna id. Faucibus scelerisque eleifend donec pretium. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Id eu nisl nunc mi ipsum faucibus. Metus aliquam eleifend mi in. Sollicitudin tempor id eu nisl. Vel pretium lectus quam id leo in.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Facilisi morbi tempus iaculis urna id. Faucibus scelerisque eleifend donec pretium. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Id eu nisl nunc mi ipsum faucibus. Metus aliquam eleifend mi in. Sollicitudin tempor id eu nisl. Vel pretium lectus quam id leo in.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Facilisi morbi tempus iaculis urna id. Faucibus scelerisque eleifend donec pretium. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Id eu nisl nunc mi ipsum faucibus. Metus aliquam eleifend mi in. Sollicitudin tempor id eu nisl. Vel pretium lectus quam id leo in.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Facilisi morbi tempus iaculis urna id. Faucibus scelerisque eleifend donec pretium. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Id eu nisl nunc mi ipsum faucibus. Metus aliquam eleifend mi in. Sollicitudin tempor id eu nisl. Vel pretium lectus quam id leo in.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Facilisi morbi tempus iaculis urna id. Faucibus scelerisque eleifend donec pretium. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Id eu nisl nunc mi ipsum faucibus. Metus aliquam eleifend mi in. Sollicitudin tempor id eu nisl. Vel pretium lectus quam id leo in.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Facilisi morbi tempus iaculis urna id. Faucibus scelerisque eleifend donec pretium. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Id eu nisl nunc mi ipsum faucibus. Metus aliquam eleifend mi in. Sollicitudin tempor id eu nisl. Vel pretium lectus quam id leo in.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
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
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac
              ut. Diam phasellus vestibulum lorem sed risus ultricies tristique
              nulla. At urna condimentum mattis pellentesque id nibh tortor id.
              Faucibus vitae aliquet nec ullamcorper sit amet. Lobortis feugiat
              vivamus at augue. Risus at ultrices mi tempus imperdiet nulla
              malesuada pellentesque. Tincidunt id aliquet risus feugiat in
              ante. Pellentesque habitant morbi tristique senectus. Condimentum
              id venenatis a condimentum vitae sapien pellentesque. Diam
              maecenas sed enim ut sem viverra aliquet eget sit.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
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

export default OurClasses;
