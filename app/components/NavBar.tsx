import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Navbar() {
  return (
    <nav className="">
      <MaxWidthWrapper className="w-full flex justify-between items-center">
        {" "}
        <div className="flex items-center">
          <Link href="/" className=" w-28 relative h-10">
            <Image src="/invia.png" alt="invia" className=" object-contain" fill />
          </Link>
        </div>{" "}
        <div className="hidden md:flex items-center space-x-8">
          {Array(4)
            .fill("PACKAGES")
            .map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-white text-sm font-medium hover:text-[#ff00ff] transition-colors"
              >
                {item}
              </Link>
            ))}
          <Link
            href="#"
            className="bg-[#ff00ff] mr-5 text-base text-white px-8 py-2 rounded-2xl font-medium hover:bg-opacity-90 transition-colors"
          >
            START
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
