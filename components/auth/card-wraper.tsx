import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";

import Header from "./header";
import Socials from "./socials";

interface ICardWrapperProps {
  children: React.ReactNode;
  headerTitle: string;
  headerDescription?: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocials?: boolean;
}

const CardWrapper = ({
  children,
  headerTitle,
  headerDescription,
  showSocials,
}: ICardWrapperProps) => {
  return (
    <Card className="md:max-w-[628px] border-none bg-gray-400 bg-opacity-10 rounded-3xl shadow-none py-8 md:py-[48px] px-4 md:px-[64px]">
      <CardHeader className="p-0 mb-10 md:mb-8">
        <Header description={headerDescription} title={headerTitle} />
      </CardHeader>

      <CardContent className="p-0 mb-8">{children}</CardContent>

      {showSocials && (
        <CardFooter className="p-0">
          <Socials />
        </CardFooter>
      )}
    </Card>
  );
};

export default CardWrapper;
