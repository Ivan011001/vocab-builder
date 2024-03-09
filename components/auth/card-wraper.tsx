import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";

import BackButton from "./back-button";
import Header from "./card-header";
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
  backButtonLabel,
  backButtonHref,
  showSocials,
}: ICardWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <Header description={headerDescription} title={headerTitle} />
      </CardHeader>

      <CardContent>{children}</CardContent>

      {showSocials && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
