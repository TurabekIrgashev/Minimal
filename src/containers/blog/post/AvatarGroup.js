import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";

export default function AvatarGroupCom() {
  return (
    <AvatarGroup total={24}>
      <Avatar
        alt="Remy Sharp"
        src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg"
      />
    </AvatarGroup>
  );
}
