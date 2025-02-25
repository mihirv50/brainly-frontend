import DocIcon from "../../icons/DocIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import ShareIcon from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}
const Card = (props: CardProps) => {
  return (
    <div className="max-w-72 p-4 bg-white border-gray-200 min-h-48 min-w-72">
      <div className="toppart flex justify-between mb-4">
        <div className="flex gap-2 items-center">
          <DocIcon />
          <h2>Project Ideas</h2>
        </div>
        <div className="flex gap-2 items-center">
          <DeleteIcon />
          <ShareIcon size="lg" />
        </div>
      </div>
      <h1 className="heading font-bold text-xl">{props.title}</h1>
      <div>
        {/* if video */}
        {props.type === "youtube" && (
          <iframe
            className="w-full mt-4"
            src={props.link.replace("watch","embed").replace("?v=","/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {/* */}
        {/* if tweet */}
        {props.type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={props.link.replace("x.com","twitter.com")}>
              February 9, 2025
            </a>
          </blockquote>
        )}
      </div>
    </div>
  );
};

export default Card;
