// const AboutUs = () => {
//   return (
//     <div className="w-11/12 mx-auto space-y-6 my-8 bg-base-200 px-8 lg:px-18 pb-12 rounded-2xl">
//       <h1 className="text-4xl text-center py-8">
//         About Us – What is HobbyHub?
//       </h1>
//       <p className="text-xl">
//         HobbyHub is a platform designed to bring together people with shared
//         interests and passions. Whether you love painting, gaming, cooking, or
//         hiking, our community helps you connect with like-minded individuals,
//         form hobby groups, and engage in exciting activities.
//       </p>

//       <p className="text-xl">
//         Our mission is to make it easy for hobby enthusiasts to meet,
//         collaborate, and grow their skills while forming meaningful connections.
//         With HobbyHub, you can explore existing groups, create your own, and
//         participate in meetups—all in one place!
//       </p>
//     </div>
//   );
// };

// export default AboutUs;

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
            At <strong>HobbyHub</strong>, we believe passions are better shared.
          </p>

          <p className="text-xl">
            We’re more than just a platform—we’re a thriving community built for
            artists, adventurers, thinkers, and tinkerers. Whether you're
            sketching in a sunlit corner, gaming till sunrise, baking your next
            masterpiece, or discovering the trails less traveled,{" "}
            <strong>HobbyHub is where your hobby finds a home</strong>.
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
            <strong>Diverse Communities</strong> – From creative arts to tech
            tinkering, there's something for every soul
          </li>
          <li>
            <strong>Easy Group Creation</strong> – Launch your own group with
            just a few clicks
          </li>
          <li>
            <strong>Vibrant Events Calendar</strong> – Explore, engage, and
            express through community activities
          </li>
          <li>
            <strong>Smart Matchmaking</strong> – Connect based on interests,
            skills, and goals
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">🌍 Who Is HobbyHub For?</h2>
        <p className="text-xl">
          The introvert who wants to share quietly. The enthusiast ready to lead
          a group. The learner in search of inspiration. The social soul seeking
          connection. If you've got a passion,{" "}
          <strong>you’ve got a place at HobbyHub</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          🚀 Let's Build a World of Shared Curiosity
        </h2>
        <p className="text-xl">
          When we explore hobbies together, we don’t just level up our skills—we
          discover pieces of ourselves along the way. So go ahead—
          <strong>create, connect, and cultivate joy</strong>. The world of
          HobbyHub is waiting for you.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
