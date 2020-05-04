import React from "react";
import { HomeLayout } from "../components/HomeLayout";
import { ListLastTrainings } from "../components/ListLastTrainings/ListLastTrainings";

interface LastTrainingsProps {
  [key: string]: any;
}

export const LastTrainings: React.FC<LastTrainingsProps> = () => {
  return (
    <HomeLayout>
      <ListLastTrainings />
    </HomeLayout>
  );
};
