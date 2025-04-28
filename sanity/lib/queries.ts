import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type=="startup" && defined(slug.current) && !defined($search) || category match $search || title match $search || author->name match $search] | order(_createdAt desc) {
  _id, title, slug, _createdAt, category, image, author->{_id, name, bio, image}, views, description
}
`);

export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type=="startup" &&  _id == $id][0]{
  _id, 
    title, 
    slug,
    _createdAt,
    category,
    image,
    author->{
      _id, name, bio, username, image
            }, 
    views, 
    description,
    pitch
}
`);