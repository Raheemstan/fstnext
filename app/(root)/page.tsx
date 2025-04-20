import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name:'Adrian' },
    _id: 1,
    description: "This is a test description",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLCv6HmQd17W074HV6ZmjB7snO2m-73ziusQ&s",
    category: "Robots",
    title: "We Robots",
  }];

  return (
    <>
      <section className="pink_container pattern">

        <h1 className="heading">Pitch your startup <br /> Connect With Entreprenuers</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.</p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "Latest Startups"}

        </p>

        <ul className="mt-7 card_grid">
          {posts?.length >0 ? (
            posts.map((post: StartupCardType, index: number) =>(
              <StartupCard key={post?._id} post={post} />
            ))
          ):(
            <p className="no-results">No Startups Found</p>
          )
          }

        </ul>

      </section>
    </>
  );
}
