import { TableCell, TableRow } from "../ui/table";

export default function generateTableRows(data: any) {
  return data.map((task: any) => (
    <TableRow key={task.emplotee_id}>
      <TableCell className="font-medium">{task.employee_id}</TableCell>
      <TableCell>{task.employee_name}</TableCell>
      <TableCell>{task.tasks}</TableCell>
      <TableCell>{task.start_date}</TableCell>
      <TableCell>{task.deadline}</TableCell>
    </TableRow>
  ));
}
