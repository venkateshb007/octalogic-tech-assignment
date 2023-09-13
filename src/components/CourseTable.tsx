import React, { useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Action from "./Action";
import { useSelector, useDispatch } from 'react-redux';
const getStatus = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-200";
    case "Closed":
      return "bg-pink-200";
    case "Archived":
      return "bg-gray-200";
    default:
      return "";
  }
};

export default function CourseTable() {
  const dispatch = useDispatch();
  const invoices = JSON.parse(localStorage.getItem('invoices'));
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead className="text-center">Description</TableHead>
          <TableHead className="text-center">Instructor</TableHead>
          <TableHead className="text-center">Instrument</TableHead>
          <TableHead className="text-center">Day of Week</TableHead>
          <TableHead className="text-center"># of Student</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell>{invoice.name}</TableCell>
            <TableCell className="text-center">{invoice.desc}</TableCell>
            <TableCell className="text-center">{invoice.instructor}</TableCell>
            <TableCell className="text-center">{invoice.instrument}</TableCell>
            <TableCell className="text-center">{invoice.day}</TableCell>
            <TableCell className="text-center">{invoice.student}</TableCell>
            <TableCell className="text-center">{invoice.price}</TableCell>
            <TableCell
              className={`text-center border rounded-lg p-2 ${getStatus(
                invoice.status
              )}`}
            >
              {invoice.status}
            </TableCell>
            <TableCell className="text-center cursor-pointer">
              <Action />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
