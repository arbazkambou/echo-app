import { OrganizationList } from "@clerk/nextjs"

function OrgSelectView() {
    return (
        <OrganizationList
            afterCreateOrganizationUrl={'/'}
            afterSelectOrganizationUrl={'/'}
            hidePersonal
            skipInvitationScreen
        />
    )
}

export default OrgSelectView
