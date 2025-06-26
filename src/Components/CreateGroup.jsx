import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { GroupsContext } from "../Contexts/GroupsContext";

const CreateGroup = () => {
  const { user } = use(AuthContext);
  const { groupsData, setGroupsData } = use(GroupsContext);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());
    newGroup.creatorId = user.uid;
    newGroup.members = [];

    fetch("https://hobby-hub-server-chi.vercel.app/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          let timerInterval;
          Swal.fire({
            title: "Congratulations!",
            html: "You have successfully created a group",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              timerInterval = setInterval(() => {}, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
          newGroup._id = data.insertedId;
          const newGroupsData = [...groupsData, newGroup];
          setGroupsData(newGroupsData);
          form.reset();
        }
      });
  };

  return (
    <div className="lg:w-10/12 mx-auto">
      <h1 className="text-center py-5 text-4xl mt-5">Create Group</h1>
      <form onSubmit={handleCreateGroup}>
        <fieldset className="bg-base-200 border-base-300 rounded-box border p-4 grid lg:grid-cols-2 gap-9">
          <legend className="fieldset-legend">User Information</legend>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">User Name</legend>
              <input
                type="text"
                name="userName"
                className="input w-full"
                value={user.displayName}
                readOnly
              />
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">User Email</legend>
              <input
                type="email"
                name="email"
                className="input w-full"
                value={user.email}
                readOnly
              />
            </fieldset>
          </div>
        </fieldset>
        <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
          <legend className="fieldset-legend">Group Information</legend>
          <div className="grid lg:grid-cols-2 gap-9">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Group Name</legend>
              <input
                type="text"
                name="groupName"
                className="input w-full"
                placeholder="Group Name"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Group Photo</legend>
              <input
                type="text"
                name="groupPhoto"
                className="input w-full"
                placeholder="Group Photo"
              />
            </fieldset>
          </div>
          <div className="grid lg:grid-cols-2 gap-9">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Meeting Location</legend>
              <input
                type="text"
                name="meetingLocation"
                className="input w-full"
                placeholder="Location"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Maximum Members</legend>
              <input
                type="number"
                name="maxMembers"
                className="input w-full"
                placeholder="Maximum Members"
                required
              />
            </fieldset>
          </div>
          <div className="grid lg:grid-cols-2 gap-9">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Hobby Category</legend>
              <select
                defaultValue="Pick a browser"
                className="select w-full"
                name="category"
                required
              >
                <option disabled={true}>Pick a category</option>
                <option>Programming & Web Development</option>
                <option>Drawing & Painting</option>
                <option>Photography</option>
                <option>Video Gaming</option>
                <option>Fishing</option>
                <option>Running</option>
                <option>Cooking</option>
                <option>Reading</option>
                <option>Writing</option>
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Start Date</legend>
              <input
                type="date"
                className="input w-full"
                name="startDate"
                required
              />
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <textarea
              className="textarea h-24 w-11/12 mx-auto"
              placeholder="Description"
              name="description"
            ></textarea>
          </fieldset>
        </fieldset>
        <input
          type="submit"
          value="Create Group"
          className="btn btn-xl my-5 w-full rounded-xl"
        />
      </form>
    </div>
  );
};

export default CreateGroup;
