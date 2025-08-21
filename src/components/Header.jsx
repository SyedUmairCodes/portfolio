import Profile from "../assets/profile.png";

const Header = () => {
  const profile = {
    name: "Syed Umair Ali",
    title: "Software Engineer from Karachi, Pakistan",
    bio: "I'm a Software and Data Engineer passionate about developing practical, reliable products. My approach is rooted in clear principles, simple solutions, and consistent, results-driven execution.",
    imageUrl: Profile,
  };

  return (
    <header className=" py-12 md:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              className="w-30 h-30 rounded-full object-cover shadow-lg"
              src={profile.imageUrl}
              alt={`${profile.name}'s profile`}
            />
          </div>
          <div className="flex flex-col text-center md:text-left space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl text-white/50">{profile.title}</p>
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl md:max-w-none">
              {profile.bio}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
