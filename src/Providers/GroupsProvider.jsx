import React, { useEffect, useState } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";

const GroupsProvider = ({ children }) => {
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hobby-hub-server-chi.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setGroupsData(data);
        setLoading(false);
      });
  }, [setGroupsData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZoneName: "long",
    }).format(date);
  };

  const providerData = {
    groupsData,
    setGroupsData,
    formatDate,
    loading,
  };

  return <GroupsContext value={providerData}>{children}</GroupsContext>;
};

export default GroupsProvider;
