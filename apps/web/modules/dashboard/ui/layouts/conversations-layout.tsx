import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable";
import { ConversationsPanel } from "../components/conversations-panel";

export const ConversationsLayout = ({
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
        className="min-w-0"
        defaultSize={"30%"}
        maxSize={"30%"}
        minSize={"20%"}
      >
        <ConversationsPanel />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel className="h-full min-w-0" defaultSize={"50%"}>
        {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
