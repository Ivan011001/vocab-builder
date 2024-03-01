import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl text-white font-semibold drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-white text-lg">An authetication service</p>

        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
