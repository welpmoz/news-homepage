import "../scss/posts.scss";

export default function Posts() {
  const posts: PostProps[] = [
    {
      "postImageUrl": "/assets/images/image-retro-pcs.jpg",
      "postResume": "What happens when old PCs are given modern upgrades?",
      "postTitle": "Reviving Retro PCs",
      "textAltImg": "MiniPC with mini components"
    },
    {
      "postImageUrl": "/assets/images/image-top-laptops.jpg",
      "postResume": "Our best picks for various needs and budges",
      "postTitle": "Top 10 Laptops of 2022",
      "textAltImg": "Highly focus laptop's keyboard",
    },
    {
      "postImageUrl": "/assets/images/image-gaming-growth.jpg",
      "postResume": "How the pandemic has sparked fresh opportunities.",
      "postTitle": "The Growth of Gaming",
      "textAltImg": "Mando levitating above a hand",
    },
  ];

  return (
    <ol className="Posts">
      {posts.map((post, i) => <Post key={i} {...post} />)}
    </ol>
  );
}

interface PostProps {
  postTitle: string
  postResume: string
  postImageUrl: string
  textAltImg: string
}

function Post({
  postResume,
  postTitle,
  postImageUrl,
  textAltImg,
}: PostProps) {
  return (
    <li className="Post">
      <img className="Post__image" src={postImageUrl} alt={textAltImg} width={100} />
      <h3 tabIndex={0} className="Post__title">{postTitle}</h3>
      <p className="Post__resume">{postResume}</p>
    </li>
  );
}
