import { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import { pallete } from "../../misc/pallete";

export default function Spinner() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <ClipLoader color={isDarkMode ? pallete.White : pallete.VeryDarkBlue} />
    </>
  );
}
