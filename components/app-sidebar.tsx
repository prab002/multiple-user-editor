"use client";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Terminal, ClipboardList } from "lucide-react";
import { useState } from "react";

const avatarImages = [
  "https://i.pinimg.com/originals/3c/04/84/3c0484740b72ebd36111dac214f695cc.gif",
  "https://github.com/shadcn.png",
  "https://avatars.githubusercontent.com/u/9919?v=4",
  "https://www.w3schools.com/w3images/avatar2.png",
  "https://www.w3schools.com/w3images/avatar5.png",
  "https://www.w3schools.com/w3images/avatar6.png",
];

export function AppSidebar() {
  const [isCopied, setIsCopied] = useState(false);
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatarImages.length);
    return avatarImages[randomIndex];
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText("Room Code or Text to Copy")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Copy failed", error);
      });
  };
  const [user, setUser] = useState([
    { socketId: "1", username: "prab" },
    { socketId: "2", username: "SHDCN" },
    { socketId: "3", username: "dhano" },
  ]);
  return (
    <Sidebar side="right">
      <SidebarContent className="bg-gradient-to-br from-[#202428] via-[#1f1f1f] to-[#3a3b3c] h-screen text-white">
        <div className="flex flex-col p-4 justify-between">
          {/* logo */}
          <div className=" bg-blue-800 flex items-center gap-2 p-4  rounded-lg">
            <Image
              src={
                "https://i.pinimg.com/originals/3c/04/84/3c0484740b72ebd36111dac214f695cc.gif"
              }
              alt=""
              height={60}
              width={60}
            />
            <div className="flex flex-col">
              <h2>RealTime</h2>
              <h2>COdeCOntribute</h2>
            </div>
          </div>
          <div>
            <h1 className="mt-2 font-black ">Users</h1>
          </div>
          {/* user data  */}
          <div className="flex flex-col mt-2 ">
            {user &&
              user.map((user) => (
                <div className="flex items-center mt-2" key={user?.socketId}>
                  <Avatar className="flex items-center justify-center">
                    <AvatarImage src={getRandomAvatar()} />
                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                  </Avatar>
                  <Button className="rounded-xl bg-[#e1ff05] w-full text-black text-start hover:bg-white hover:text-green">
                    <span className="w-full items-start">{user.username}</span>
                    <span className="border border-solid border-black rounded-sm">
                      <Terminal />
                    </span>
                  </Button>
                </div>
              ))}
          </div>

          {/* copy room code */}
          <div className="mt-2 flex flex-col gap-4">
            <Button
              onClick={handleCopy}
              className={`rounded-xl w-full text-black text-start ${
                isCopied
                  ? "bg-green-500 text-white shadow-lg ring-2 ring-green-400"
                  : "bg-[#e1ff05] shadow light-blue-shadow"
              } hover:bg-blue-600 hover:text-green transition-all`}
            >
              <span className="w-full items-start justify-between">
                {isCopied ? "Copied!" : "Copy Room Code"}
              </span>
              <ClipboardList />
            </Button>
            <Button
              className={`rounded-xl w-full text-black text-start ${
                isCopied
                  ? "bg-green-500 text-white shadow-lg ring-2 ring-green-400"
                  : "bg-[#e1ff05] shadow light-blue-shadow"
              } hover:bg-blue-600 hover:text-green transition-all`}
            >
              Leave
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
