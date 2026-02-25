import { AuthGuard } from "@/modules/auth/ui/components/AuthGuard";
import OrganizationGuard from "@/modules/auth/ui/components/OrganizationGuard";

const Layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <AuthGuard>
            <OrganizationGuard>
                {children}
            </OrganizationGuard>
        </AuthGuard>
    );
};

export default Layout;
