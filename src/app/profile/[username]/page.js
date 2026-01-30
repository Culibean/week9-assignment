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

  const query = await db.query(`SELECT * FROM profiles WHERE username = $1`, [
    username,
  ]);
  console.log(query);

  const data = query.rows[0];
  console.log(data);

  if (query.rows.length === 0) {
    notFound();
  }

  //db queries to GET data from the tables
  return (
    <>
      <h1>User&apos;s info</h1>
      <h1>User&apos;s posts</h1>
    </>
  );
}
