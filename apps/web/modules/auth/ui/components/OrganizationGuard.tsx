'use client';

import { useOrganization } from "@clerk/nextjs";
import OrgSelectView from "../../views/OrgSelectView";

function OrganizationGuard({ children }: { children: React.ReactNode }) {
    const { organization } = useOrganization();

    if (!organization) {
        return <OrgSelectView />
    }

    return (
        children
    )
}

export default OrganizationGuard
