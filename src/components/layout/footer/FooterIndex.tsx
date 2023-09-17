import { useSelector } from "react-redux";
import { selectLocalizedLocales } from "~/redux/slices/languageSlice";
function Footer() {
  const localizedLocales = useSelector(selectLocalizedLocales);

  if (!localizedLocales) {
    return <div>Loading...</div>;
  }

  return (
    <footer>
      <div className="mx-auto max-w-screen-lg bg-neutral-200 p-4 px-8 text-center text-neutral-700">
        {localizedLocales?.footer?.copy}
        {localizedLocales?.footer?.links?.map((link, index) => (
          <span key={link.tittle + index}>
            {" · "}
            <a
              className="text-neutral-800"
              href={link.href}
            >
              {link.tittle}
            </a>
          </span>
        ))}
        <br />
        Designed by
        <a
          className="text-neutral-800 "
          href="https://dhlisaac.info/"
          target="_blank"
        >
          {" Diego Isaac Herrera Ledezma "}
        </a>
        2023
      </div>
    </footer>
  );
}

export default Footer;
