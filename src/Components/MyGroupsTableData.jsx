import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyGroupsTableData = ({ group, groupsData, setGroupsData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const formattedDate = formatDate(group.startDate);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-hub-server-chi.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
              const remainingGroups = groupsData.filter(
                (coffee) => coffee._id !== id
              );
              setGroupsData(remainingGroups);
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{group.groupName}</td>
      <td>{group.category}</td>
      <td>{group.maxMembers}</td>
      <td>{group.meetingLocation}</td>
      <td>{formattedDate}</td>
      <td>
        <Link to={`/updateGroup/${group._id}`}>
          <button className="btn btn-primary btn-sm mr-2">Update</button>
        </Link>
        <button
          onClick={() => handleDelete(group._id)}
          className="btn btn-sm bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyGroupsTableData;
