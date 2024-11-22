import { auth } from "@/auth";
import { AppRoute } from "@/libs/enums";
import { redirect } from "next/navigation";

export default async function Feed() {
  const session = await auth();

  console.log(session);

  if (!session) {
    redirect(AppRoute.SIGN_IN);
  }

  return <div>Feed</div>;
}
