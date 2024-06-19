import React from "react";
import TodoTable from "@/components/tables/todoTable";

function page() {
  return (
    <section className="flex justify-center items-center min-h-screen  bg-green-900">
      <div className="bg-white rounded-lg shadow-inner p-5">
        <TodoTable />
      </div>
    </section>
  );
}

export default page;
