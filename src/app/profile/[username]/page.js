//TODO: render users data
//READ user's data from the table
//READ user's posts: render a list of users personal posts (SEQUEL query to show all the personal posts from this user)

//The Clerk user id does NOT exists until the user signs up - as a new user I should not be able to see user page until I am signed up

import { db } from "@/utils/dbConnection";
import Image from "next/image";
import PostCard from "@/components/Postcard";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }) {
  const { username } = await params;

  const profileQuery = await db.query(
    `SELECT * FROM profiles WHERE username = $1`,
    [username],
  );
  console.log(profileQuery);

  if (profileQuery.rows.length === 0) {
    notFound();
  }

  const profile = profileQuery.rows[0];
  console.log(profile);

  const postQuery = await db.query(
    `SELECT posts.id, posts.trip_description, posts.departure_airport, posts.arrival_airport, posts.image_url, posts.image_alt, posts.created_at, profiles.username, profiles.avatar_url, (SELECT COUNT(*) FROM likes WHERE likes.post_id = posts.id) AS likes_count, (SELECT COUNT(*) FROM comments WHERE comments.post_id = posts.id) AS comment_count FROM posts JOIN profiles ON posts.clerk_id=profiles.clerk_id WHERE posts.clerk_id =$1 ORDER BY posts.created_at DESC`,
    [profile.clerk_id],
  );
  console.log(postQuery);
  const posts = postQuery.rows;

  //db queries to GET data from the tables
  return (
    <>
      <h1>{profile.username}s Profile</h1>
      <div>
        <Image
          src={profile.avatar_url}
          alt={`${profile.username}s profile picture`}
          width={60}
          height={60}
        />
      </div>
      <h2>{profile.username} Posts</h2>

      {posts.length === 0 && <p>No posts yet</p>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
