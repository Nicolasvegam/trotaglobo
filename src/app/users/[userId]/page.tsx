
import { createClerkClient } from "@clerk/nextjs/server";
import { UserProfileContent } from "./UserProfileContent";
import { ClerkUserAdapter } from "@/lib/adapter/clerk-user.adapter";

export type paramsType = Promise<{ userId: string }>;


type Props = {
  params: paramsType;
};

const UserProfilePage = async ({ params }: Props) => {
  const { userId } = await params;
  const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });
  const clerkUser = await clerk.users.getUser(userId);

  const user: ClerkUserAdapter = {
    id: clerkUser.id,
    firstName: clerkUser.firstName,
    lastName: clerkUser.lastName,
    image: clerkUser.imageUrl,
  };

  return <UserProfileContent user={user} />;
};

export default UserProfilePage;