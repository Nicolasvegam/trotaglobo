"use client";

import { UserProfileContent } from "./UserProfileContent";

type PageParams = Promise<{ userId: string }>;

export default async function UserProfilePage({ params }: { params: PageParams }) {
  const { userId } = await params;
  
  return <UserProfileContent userId={userId} />;
} 