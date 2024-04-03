import Image from "next/image";
import Header from "../components/Header";
import Profile from "../components/Profile";
import About from "../components/About";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Profile />
      <About />
    </main>
  );
}
