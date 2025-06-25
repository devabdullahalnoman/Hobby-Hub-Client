import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthContext";
import { GroupsContext } from "../Contexts/GroupsContext";

const UpdateGroup = () => {
  const { user } = use(AuthContext);
  const { setGroupsData } = use(GroupsContext);
  const oldGroupData = useLoaderData();
  const [oldGroup, setOldGroup] = useState(oldGroupData);

  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());

    fetch(`https://hobby-hub-server-chi.vercel.app/groups/${oldGroup._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("You have successfully updated the group!", {
            position: "top-left",
          });

          fetch("https://hobby-hub-server-chi.vercel.app/")
            .then((res) => res.json())
            .then((data) => {
              setGroupsData(data);
              setOldGroup(newGroup);
            });

          form.reset();
        }
      });
  };

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-center py-5 text-4xl mt-5">Update Your Group</h1>
      <form onSubmit={handleUpdateGroup}>
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
                defaultValue={oldGroup.groupName}
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Group Photo</legend>
              <input
                type="text"
                name="groupPhoto"
                className="input w-full"
                defaultValue={oldGroup.groupPhoto}
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
                defaultValue={oldGroup.meetingLocation}
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Maximum Members</legend>
              <input
                type="number"
                name="maxMembers"
                className="input w-full"
                defaultValue={oldGroup.maxMembers}
                required
              />
            </fieldset>
          </div>
          <div className="grid lg:grid-cols-2 gap-9">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Hobby Category</legend>
              <select
                defaultValue={oldGroup.category}
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
                defaultValue={oldGroup.startDate}
                required
              />
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Description</legend>
            <textarea
              className="textarea h-24 w-11/12 mx-auto"
              defaultValue={oldGroup.description}
              name="description"
            ></textarea>
          </fieldset>
        </fieldset>
        <input
          type="submit"
          value="Update Group"
          className="btn btn-xl my-5 w-full rounded-xl"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateGroup;
