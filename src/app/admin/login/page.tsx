import AdminLoginPage from "@/components/pages/AdminLoginPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Login",
};

export default function LoginPage() {
    return <AdminLoginPage />;
}