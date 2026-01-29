//TODO: render users data
//READ user's data from the table
//READ user's posts: render a list of users personal posts (SEQUEL query to show all the personal posts from this user)

//The Clerk user id does NOT exists until the user signs up - as a new user I should not be able to see user page until I am signed up

export default function ProfilePage() {
  //db queries to GET data from the tables
  return (
    <>
      <h1>User&apos;s info</h1>
      <h1>User&apos;s posts</h1>
    </>
  );
}
