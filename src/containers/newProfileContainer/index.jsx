import React from "react";
import CardsRow from "./CardsRow";
import ProfileHeader from "./header";

const NewProfileContainer = () => {
  return (
    <section>
      <ProfileHeader name="John Doe" address="0x2345667764456764" fflwing={`${12}k`} fflwers={`${102}k`} />
      <CardsRow />
    </section>
  );
};

export default NewProfileContainer;
