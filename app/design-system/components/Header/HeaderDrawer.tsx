import { IconCircle0, IconCircleX, IconMenu3, IconX } from "@tabler/icons-react";
import { headerAtom } from "../../atoms";

export default function HeaderDrawer() {
  const opened = headerAtom.useOpened();

  return (
    <div>
      <button onClick={headerAtom.toggle} className="w-8">
        {!opened ? (
          <IconMenu3 className="text-violet-red" size={30} />
        ) : (
          <IconX size={30} className="text-violet-red" />
        )}
      </button>
    </div>
  );
}
