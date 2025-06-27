const AboutUs = () => {
  return (
    <div className="lg:w-10/12 mx-auto space-y-6 my-8 bg-base-200 px-8 lg:px-18 pb-12 rounded-2xl">
      <h1 className="text-4xl text-center py-8">
        About Us – What is HobbyHub?
      </h1>

      <div className="lg:grid grid-cols-2 gap-20">
        <div className="col-span-1">
          <img
            src="https://i.ibb.co/5XbS991h/stacie-ong-z-Fl-OVfh-Qkrk-unsplash.jpg"
            alt=""
            className="mb-5"
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <p className="text-xl">
            At <span className="font-bold">HobbyHub</span>, we believe passions
            are better shared.
          </p>

          <p className="text-xl">
            We’re more than just a platform—we’re a thriving community built for
            artists, adventurers, thinkers, and tinkerers. Whether you're
            sketching in a sunlit corner, gaming till sunrise, baking your next
            masterpiece, or discovering the trails less traveled,{" "}
            <span className="font-bold">
              HobbyHub is where your hobby finds a home
            </span>
            .
          </p>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 gap-20 mb-15">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mt-8">🎯 Our Mission</h2>
          <p className="text-xl">
            To empower hobbyists of all kinds to connect, collaborate, and grow
            together. We make it easy to:
          </p>
          <ul className="list-disc list-inside text-xl">
            <li>Discover local and global hobby groups</li>
            <li>Attend or host meetups and events</li>
            <li>Share your progress and learn from others</li>
            <li>Build lasting friendships through shared passions</li>
          </ul>
        </div>
        <div>
          <img
            src="https://i.ibb.co/JwxBtzxy/felix-rostig-Um-V2wr-Vbq8-unsplash.jpg"
            alt=""
            className="mt-5"
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mt-8">
          🧩 What Makes HobbyHub Special?
        </h2>
        <ul className="list-disc list-inside text-xl">
          <li>
            <span className="font-bold">Diverse Communities</span> – From
            creative arts to tech tinkering, there's something for every soul
          </li>
          <li>
            <span className="font-bold">Easy Group Creation</span> – Launch your
            own group with just a few clicks
          </li>
          <li>
            <span className="font-bold">Vibrant Events Calendar</span> –
            Explore, engage, and express through community activities
          </li>
          <li>
            <span className="font-bold">Smart Matchmaking</span> – Connect based
            on interests, skills, and goals
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">🌍 Who Is HobbyHub For?</h2>
        <p className="text-xl">
          The introvert who wants to share quietly. The enthusiast ready to lead
          a group. The learner in search of inspiration. The social soul seeking
          connection. If you've got a passion,{" "}
          <span className="font-bold">you’ve got a place at HobbyHub</span>.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          🚀 Let's Build a World of Shared Curiosity
        </h2>
        <p className="text-xl">
          When we explore hobbies together, we don’t just level up our skills—we
          discover pieces of ourselves along the way. So go ahead—
          <span className="font-bold">create, connect, and cultivate joy</span>.
          The world of HobbyHub is waiting for you.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
