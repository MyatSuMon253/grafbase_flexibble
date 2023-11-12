import { NavLinks } from "@/constants";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();
  // const session = {
  //   user: {
  //     id: "1",
  //     name: "myat",
  //     email: "myat@gmail.com",
  //     avatarUrl:
  //       "https://img.freepik.com/free-photo/pink-toy-doll_71767-111.jpg?size=626&ext=jpg&ga=GA1.2.2135065646.1695356914&semt=sph",
  //   },
  // };

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-projec">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
