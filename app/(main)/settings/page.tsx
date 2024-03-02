import { signOut } from "@/auth";
import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      SettingsPage
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
