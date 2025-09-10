import Footer from "@/components/native/Footer";
import Header from "@/components/native/navbar/parent";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    );
}