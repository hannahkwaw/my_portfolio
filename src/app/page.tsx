import Image from "next/image";
import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Profile />
      <About />
      <Experience />
    </main>
  );
}
