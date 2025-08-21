import { DeleteConfirmation } from "@/components/DeleteConfirmation";
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
import {
  useDeleteTourTypeMutation,
  useGetTourTypesQuery,
} from "@/redux/features/tourtype/tourType.api";
import { Trash2 } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypesQuery(undefined);
  const [deleteTourType, { isLoading }] = useDeleteTourTypeMutation();

  const handleConfirmDelte = async (tourId: string) => {
    const res = await deleteTourType(tourId).unwrap();
    return res;
  };
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
            <TableRow key={type._id}>
              <TableCell className="font-medium w-full">{type?.name}</TableCell>
              <TableCell className="">
                <DeleteConfirmation
                  onClick={() => handleConfirmDelte(type._id)}
                  isLoading={isLoading}
                >
                  <Button size="sm" className="cursor-pointer">
                    <Trash2 />
                  </Button>
                </DeleteConfirmation>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddTourType;
