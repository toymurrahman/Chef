import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({wantToCook}) => {
  return (
    <div className="">
        <h2>b: {wantToCook.length} </h2>
        <Bookmark />
    </div>
  );
};

export default Bookmarks;
