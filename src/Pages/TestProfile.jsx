import React, { Fragment, Suspense, lazy, useEffect, useState } from "react";
import HayatProfile from "../data/HayatProfile.json";
import ShayamProfile from "../data/ShayamProfile.json";
import SabaProfile from "../data/SabaProfile.json";
import VinayProfile from "../data/VinayProfile.json";
import RanaProfile from "../data/RanaProfile.json";
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));
const ProfileComponent = lazy(() => import("../components/Profile/Profile"));

export default function TestProfile() {
  const [profile, setprofile] = useState([]);
  useEffect(() => {
    const data_arrays = [
      HayatProfile,
      ShayamProfile,
      RanaProfile,
      VinayProfile,
      SabaProfile,
    ];
    const MergedArray = data_arrays.flat();
    setprofile(MergedArray);
  }, []);
  return (
    <Fragment>
      <Suspense fallback={<p style={{color:'white'}}>loading..</p>}>
        <Sidebar />
      </Suspense>
        {profile.length > 1
          ? profile.map((item, index) => {
              return (
                <Suspense fallback={<p style={{color:'white'}}>loading...</p>}>
                  <ProfileComponent data={item}  />
                </Suspense>
              );
            })
          : null}
    </Fragment>
  );
}
