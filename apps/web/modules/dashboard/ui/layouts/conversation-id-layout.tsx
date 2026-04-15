import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { ContactPanel } from "../components/contact-panel";

export const ConversationIdLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ResizablePanelGroup
      className="flex h-full w-full flex-1 min-w-0"
      orientation="horizontal"
    >
      <ResizablePanel
        className="h-full min-w-0"
        defaultSize={"20%"}
        minSize={"20%"}
      >
        <div className="flex h-full w-full flex-1 min-w-0 flex-col">
          {children}
        </div>
      </ResizablePanel>
      <ResizableHandle className="hidden lg:block" />
      <ResizablePanel
        className="hidden h-full min-w-0 lg:block"
        defaultSize={"28%"}
        maxSize={"28%"}
        minSize={"22%"}
      >
        <ContactPanel />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
