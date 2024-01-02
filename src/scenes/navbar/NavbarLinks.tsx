import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled?: (value: boolean) => void;
};

const NavbarLinks = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  const isMediumScreen: boolean = useMediaQuery("(min-width:1060px)");

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
    transition duration-500 hover:text-primary-300`}
      offset={`${isMediumScreen ? "0" : "20"}`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        if (setIsMenuToggled) {
          setIsMenuToggled(false);
        }
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default NavbarLinks;
