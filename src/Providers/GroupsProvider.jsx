import React, { useEffect, useState } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";

const GroupsProvider = ({ children }) => {
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState(groupsData.members);

  useEffect(() => {
    fetch("https://hobby-hub-server-chi.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setGroupsData(data);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZoneName: "long",
    }).format(date);
  };

  const refetchGroups = async () => {
    try {
      const res = await fetch("https://hobby-hub-server-chi.vercel.app/");
      const data = await res.json();
      setGroupsData(data);
    } catch (err) {
      console.error("Failed to refetch groups:", err);
    }
  };

  const providerData = {
    groupsData,
    setGroupsData,
    formatDate,
    loading,
    setLoading,
    members,
    setMembers,
    refetchGroups,
  };

  return (
    <GroupsContext.Provider value={providerData}>
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;
