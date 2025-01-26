import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({wantToCook}) => {
  return (
    <div className="">
        <h2>b: {wantToCook.length} </h2>
        
        {
          wantToCook.map(wantToCooks => <Bookmark key={wantToCooks.id} wantToCooks={wantToCooks} > </Bookmark> )
        }
    </div>
  );
};

export default Bookmarks;
