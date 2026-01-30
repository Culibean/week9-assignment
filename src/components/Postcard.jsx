import Image from "next/image";
import Likes from "./Likes";
import Comments from "./Comments";

//this is the card where each post entry sits

export default function PostCard({ post }) {
  return (
    <>
      <div>
        <Image
          src={post.avatar_url}
          alt={`${post.username}'s avatar`}
          width="40"
          height="40"
        />
        <div>
          <p>{post.username}</p>
          <p>
            {post.first_name} {post.last_name}
          </p>
        </div>

        <p>{post.trip_description}</p>
        <p>{post.departure_airport}</p>
        <p>{post.arrival_airport}</p>

        {post.image_url && (
          <Image
            src={post.image_url}
            alt={post.image_alt || "Trip photo"}
            width={200}
            height={200}
          />
        )}
        <p>{post.created_at.toLocaleString()}</p>
        <Likes postId={post.id} likesCount={post.likes_count} />
        <Comments postId={post.id} />
      </div>
    </>
  );
}
