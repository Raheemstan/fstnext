import Link from "next/link"
import Image from "next/image"
import { auth, signIn, signOut } from "@/auth"


const Navbar = async () => {

    const session = await auth()
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">
                    <Image src="/logo.png" alt="Logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <form action={async () => {
                                "use server";
                                await signOut( {redirectTo: "/"});
                            }} className="flex items-center gap-2">
                                <button type="submit" className=""> Logout</button>
                            </form>

                            <Link href={`/user/${session?.id}`}>
                                <span>
                                    {session?.user?.name}
                                </span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () => {
                            "use server";
                            await signIn("github");
                        }}>
                            <button type="submit">Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar