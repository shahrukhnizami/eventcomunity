"use client";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRef,useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { uploadImage } from "@/actions/upload";
import { cn } from "@/lib/utils";
import { addCategory } from "@/actions/categories";
  
export function AddCategory() {
    const [open, setOpen] = useState(false);


    
  const isDesktop = true;
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when {`you're`}{" "}
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

    return(<Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      )
}

function ProfileForm({ className }) {
    const [loading, setLoading] = useState(false);
    const formRef = useRef();
    const { toast } = useToast();
    
    const handleAddCategory = async (formData) => {
      console.log("formData=>", formData);
      setLoading(true);
      let uploadLink = await uploadImage(formData);
      const obj = {
        title: formData.get("title"),
        description: formData.get("description"),
        thumbnail: uploadLink,
      };
      await addCategory(obj);
      toast({
        title: "Category added successfully",
      });
      formRef?.current?.reset();
      setLoading(false);
    };
    return (
      <form
        ref={formRef}
        action={handleAddCategory}
        className={cn("grid items-start gap-4", className)}
      >
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            required
            name="title"
            type="title"
            id="title"
            placeholder="Sports"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Input
            required
            name="description"
            id="description"
            placeholder="About Category"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="thumbnail">Thumbnail</Label>
          <Input required name="thumbnail" type="file" />
        </div>
        <Button disabled={loading} type="submit">
          {loading ? "Loading..." : "Add Category"}
        </Button>
      </form>
    );
  }