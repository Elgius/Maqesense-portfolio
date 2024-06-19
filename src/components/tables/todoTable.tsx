"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import generateTableRows from "./rows";

interface Data {
  employee_id: string;
  employee_name: string;
  role: string;
  tasks: string;
  start_date: string;
  deadline: string;
}

export default function TodoTable() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch exectuted");
      const response = await fetch("/api/tasks");
      const data = await response.json();
      console.log(`this is the data: ${JSON.stringify(data, null, 2)}`);
      setLoading(false);
      setData(data.Tasks);
    };
    fetchData();
  }, []);

  return (
    <section className="container">
      <div className="flex sm:flex-col">
        <Table>
          <TableCaption>Note: contact Qalif for queries</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] hidden">Task ID</TableHead>
              <TableHead>Person in charge</TableHead>
              <TableHead>Tasks</TableHead>
              <TableHead>Start date</TableHead>
              <TableHead>Deadline</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{generateTableRows(data)}</TableBody>
        </Table>
      </div>
    </section>
  );
}
