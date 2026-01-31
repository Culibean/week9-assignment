import Image from "next/image";
import Likes from "./Likes";
import Comments from "./Comments";
import PostCardStyles from "./Postcard.module.css";

//this is the card where each post entry sits

export default function PostCard({ post }) {
  return (
    <>
      <div className={PostCardStyles.card}>
        <div className={PostCardStyles.header}>
          <Image
            className={PostCardStyles.avatar}
            src={post.avatar_url}
            alt={`${post.username}'s avatar`}
            width="40"
            height="40"
          />
          <div className={PostCardStyles.user}>
            <p>{post.username}</p>
          </div>
        </div>

        <div className={PostCardStyles.trip}>
          <p className={PostCardStyles.p}>{post.trip_description}</p>
          <div className={PostCardStyles.airports}>
            <p className={PostCardStyles.p}>From: {post.departure_airport}</p>
            <p className={PostCardStyles.p}>To: {post.arrival_airport}</p>
          </div>
        </div>

        {post.image_url && (
          <Image
            className={PostCardStyles.image}
            src={post.image_url}
            alt={post.image_alt || "Trip photo"}
            width={300}
            height={300}
          />
        )}
        <p className={PostCardStyles.date}>
          {" "}
          Skylogged at: {""}
          {post.created_at.toLocaleString()}
        </p>
        <Likes postId={post.id} likesCount={post.likes_count} />
        <Comments postId={post.id} />
      </div>
    </>
  );
}
