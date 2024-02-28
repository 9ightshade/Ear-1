const Nav = () => {
  const faq = "FAQ'S";

  return (
    <ul className="hidden md:flex gap-[1em]  px-[.5em] text-white  ">
      <li>Home</li>
      <li>For Fans</li>
      <li>For Influencers</li>
      <li>Features</li>
      <li>{faq}</li>
    </ul>
  );
};
export default Nav;
