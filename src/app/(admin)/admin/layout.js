
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";

export default function layout({children}){
return(
  <html lang="en">
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <body>
            
        <Tabs defaultValue="dashboard" className="w-full">
  <TabsList className="w-full">
   <Link href={"/admin/dashboard"}> 
   <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
   </Link> 
   <Link href={"/admin/users"}>
    <TabsTrigger value="users">Users</TabsTrigger>
    </Link>
    <Link href={"/admin/events"}>
    <TabsTrigger value="events">Events</TabsTrigger>
    </Link>
    <Link href={"/admin/categories"}>
    <TabsTrigger value="categories">Categories</TabsTrigger>
    </Link>
    <Link href={"/admin/subcategories"}>
    <TabsTrigger value="subcategories">Sub Categories</TabsTrigger>
    </Link>
  </TabsList>
  <TabsContent value="dashboard">{children}</TabsContent>
  <TabsContent value="users">{children}</TabsContent>
  <TabsContent value="events">{children}</TabsContent>
  <TabsContent value="categories">{children}</TabsContent>
  <TabsContent value="subcategories">{children}</TabsContent>
</Tabs>

        </body>
    </html>
)
}