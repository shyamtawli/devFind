import React, { Fragment, Suspense, lazy, useEffect, useState } from "react";
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));
const ProfileComponent = lazy(() => import("../components/Profile/Profile"));

export default function TestProfile() {
  const [profile, setprofile] = useState([]);

  const fetchData = async () => {
    try {
      const fileListResponse = await fetch(`/data/ProfileList.json`);
      const fileList = await fileListResponse.json();

      const ProfileDataPromise = fileList.map(async (filename) => {
        const profileResponse = await fetch(`/data/${filename}`);
        const data = await profileResponse.json();
        return data;
      });

      const AllProfileDataSetteled = await Promise.all(ProfileDataPromise);
      setprofile(AllProfileDataSetteled);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <Suspense fallback={<p style={{ color: "white" }}>loading..</p>}>
        <Sidebar />
      </Suspense>
      {profile.length > 1
        ? profile.map((data, index) => (
            <ProfileComponent data={data} key={index} />
          ))
        : null}
    </Fragment>
  );
}
