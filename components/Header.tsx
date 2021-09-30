import Image from "next/image";
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row mt-5 justify-between items-center">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderIcon Icon={HomeIcon} title="HOME" />
            <HeaderIcon Icon={LightningBoltIcon} title="TRENDING" />
            <HeaderIcon Icon={BadgeCheckIcon} title="VERIFIED" />
            <HeaderIcon Icon={CollectionIcon} title="COLLECTIONS" />
            <HeaderIcon Icon={SearchIcon} title="SEARCH" />
            <HeaderIcon Icon={UserIcon} title="ACCOUNT" />
        </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={180}
        height={90}
        alt="hulu logo"        
      />
    </header>
  );
}
