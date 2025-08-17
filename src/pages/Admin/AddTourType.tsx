import { AddTourTypeModal } from "@/components/modules/Admin/TourType/AddTourTypeModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTourTypesQuery } from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypesQuery(undefined);
  console.log(data);
  return (
    <div className="w-full max-w7xl mx-auto px-4 border border-muted rounded-md">
      <div className="flex justify-between my-8">
        <h1 className="text-xl font-semibold">Tour Types</h1>
        <AddTourTypeModal />
      </div>
      <Table>
        <TableCaption>A list of Tour Types.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-primary">Name</TableHead>
            <TableHead className="w-[100px] text-primary text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((type) => (
            <TableRow key={type.id}>
              <TableCell className="font-medium w-full">{type.name}</TableCell>
              <TableCell className="">
                <Button size="sm" className="cursor-pointer">
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddTourType;
