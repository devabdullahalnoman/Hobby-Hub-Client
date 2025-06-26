import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { GroupsContext } from "../Contexts/GroupsContext";
import Members from "./Members";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const GroupDetails = () => {
  const group = useLoaderData();
  const { formatDate } = use(GroupsContext);
  const { user } = use(AuthContext);
  const formattedDate = formatDate(group.startDate);
  const today = new Date();
  const groupStartDate = new Date(group.startDate);
  const maxMembers = parseInt(group.maxMembers);
  const [members, setMembers] = useState(group.members);
  const memberUserIds = members.map((member) => member.uid);

  const handleJoin = () => {
    if (memberUserIds.includes(user.uid) || group.creatorId === user.uid) {
      Swal.fire({
        title: "Already a Member",
        text: "You are already in this group!",
        icon: "info",
      });
      return;
    }

    if (members.length === maxMembers) {
      Swal.fire({
        title: "Vacancy Filled",
        text: "Maximum vacancy is filled in this group! No more member can join.",
        icon: "info",
      });
      return;
    }

    const newMember = {
      uid: user.uid,
      userName: user.displayName,
      email: user.email,
    };

    fetch(`https://hobby-hub-server-chi.vercel.app/groups/${group._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ member: newMember }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Joined Successfully!",
            text: "You have joined the group.",
            icon: "success",
          });

          setMembers([...members, newMember]);
        }
      });
  };
  return (
    <div className="card bg-base-200 shadow-sm my-10 py-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-semibold">{group.groupName}</h1>
      <p className="text-2xl font-bold mb-6">{group.category}</p>
      </div>

      <div className="lg:grid grid-cols-12 w-10/12 mx-auto">
        <div className="col-span-5">
          <figure className="flex flex-col">
            <img src={group.groupPhoto} alt="group banner" />
            <figcaption>Artistic Vibe</figcaption>
          </figure>
        </div>
         <div className="divider divider-horizontal col-span-2 mx-auto"></div>
        <div className="col-span-5">
          <div className="card-body">
            <p className="text-2xl mt-3">
              <span className="text-xl font-medium mr-3">Group Creator: </span>
              {group.userName}
            </p>
            <p className="text-2xl mt-3">
              <span className="text-xl font-medium mr-3">Meeting Place: </span>
              {group.meetingLocation}
            </p>
            <p className="text-2xl my-3">
              <span className="text-xl font-medium mr-3">
                Maximum Members:{" "}
              </span>
              {group.maxMembers}
            </p>
            <p className="text-2xl font-bold">Start Date:</p>
            <p className="text-xl">{formattedDate}</p>
            <p className="text-2xl mt-3">Members:</p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
              {members.map((member, index) => (
                <Members key={index} member={member}></Members>
              ))}
            </div>
            <div className="text-center bg-base-100 rounded-lg my-2 mt-3.5">
              <h1 className="text-2xl font-bold my-2">Description</h1>
              <p className="text-xl">{group.description}</p>
            </div>
            {groupStartDate >= today ? (
              <button onClick={handleJoin} className="btn btn-primary text-xl">
                Join
              </button>
            ) : (
              <button className="btn btn-secondary text-xl" disabled>
                This group is no longer active
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
