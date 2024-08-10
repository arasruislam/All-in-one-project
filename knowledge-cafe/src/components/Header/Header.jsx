import profile from "../../assets/images/profile.png"

const Header = () => {
   return (
      <div className="flex justify-between items-center my-2 border-b-2 pb-4">
         <h1 className="text-4xl font-bold">Knowledge Care</h1>
         <img src={profile} alt="profile images" />
      </div>
   );
};

export default Header;
