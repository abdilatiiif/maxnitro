import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function AvatarProfile() {
  return (
    <div className=" flex-row hidden md:flex">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
    </div>
  );
}
