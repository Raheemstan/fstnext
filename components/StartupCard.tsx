import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const {
        _createdAt,
        views,
        author: { id: authorId, name },
        title,
        category,
        _id,
        image,
        description,
    } = post;

    return (
        <li className="startup-card group border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">{formatDate(_createdAt)}</p>
                <div className="flex items-center gap-1.5 text-primary">
                    <EyeIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">{views}</span>
                </div>
            </div>

            <Link href={`/startup/${_id}`}>
                <h3 className="mt-4 text-lg font-semibold leading-snug line-clamp-2 hover:underline">
                    {title}
                </h3>
            </Link>

            <div className="flex justify-between items-center mt-2">
                <Link href={`/user/${authorId}`}>
                    <p className="text-sm font-medium text-muted-foreground hover:underline line-clamp-1">
                        {name}
                    </p>
                </Link>
                <Link href={`/user/${authorId}`}>
                    <Image
                        src="https://placehold.co/48x48"
                        alt={`${name}'s avatar`}
                        width={36}
                        height={36}
                        className="rounded-full"
                    />
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                    {description}
                </p>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-md mt-2"
                />
            </Link>

            <div className="flex justify-between items-center mt-4">
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className="text-sm font-medium text-primary hover:underline">
                        {category}
                    </p>
                </Link>
                <Button size="sm" className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>
        </li>
    );
};

export default StartupCard;
