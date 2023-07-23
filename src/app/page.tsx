import Image from "next/image";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <Meme />
        </div>
      </main>
    </div>
  );
}
