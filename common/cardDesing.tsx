"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";

const CardDesign = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const createRoom = () => {
    const id = uuid();
    setRoomId(id);
    toast({
      title: "Your new Room Id",
      description: id,
    });
  };

  const joinroom = () => {
    if (!roomId || !username) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "You have not added your room ID and username",
      });
      return;
    }

    router.push(`/editor/${roomId}?${encodeURIComponent(username)}`);
  };

  const handleSubmit = () => {
    event?.preventDefault();
    joinroom();
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="flex gap-4">
          <Image
            src={
              "https://i.pinimg.com/originals/0b/1d/fc/0b1dfc8ebe6f365f4208cb0cff5c46c9.gif"
            }
            alt="Coder"
            className="border rounded-lg"
            width={50}
            height={50}
          />
          <span className="w-full flex-col">
            <h1>RealTime</h1>
            <h2>COdeCOntribute</h2>
          </span>
        </CardTitle>
        <CardDescription>Simply Code With Anyone in Real Time</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Group ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Join
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col w-full gap-2">
        <div className="flex items-center justify-center w-full gap-2">
          <p>Create Room to share:</p>
          <Button onClick={createRoom} variant={"destructive"}>
            N R
          </Button>
        </div>
        <div className="flex w-full gap-2">
          <p className="flex gap-2">
            This Project is OpenSource On
            <Link
              className="underline"
              href={"https://github.com/prab002/multiple-user-editor"}
            >
              GitHub
            </Link>
          </p>
          <Image
            src={
              "https://i.pinimg.com/originals/2e/e6/4c/2ee64c1f8e4358d928d265f5b8389a35.gif"
            }
            alt="Coder"
            width={20}
            height={20}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardDesign;
