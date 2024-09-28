"use client"; // Suponiendo que este hook existe
import Header from "@/components/globals/Header";

const Users = () => {
  return (
    <div className="flex flex-col">
      {/* HEADER */}
      <Header name="Usuarios" />
    </div>
  );
};

export default Users;
