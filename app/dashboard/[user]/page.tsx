"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth/auth-client";

const page = () => {
  return (
    <div>
      <Button
        onClick={async () =>
          await signOut({
            fetchOptions: {
              onSuccess: () => {
                console.log(`loggedOut`);
              },
            },
          })
        }
      >
        logout
      </Button>
    </div>
  );
};

export default page;
